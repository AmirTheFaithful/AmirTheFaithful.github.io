"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_1 = require("../db/users");
const JWT_SECRET = "91l#k%/12jm(038;ax?@!03$550k-[?//279@-*^l;cgajsnqr018346812gxsvadf&023//?@%&139841n4l12398afa13298^%$lsd<.[a!";
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        /* Checking credentials for validity */
        // Verify on credentials presence
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email or password are not provided." });
        }
        // Check email validity
        if (!email.includes("@")) {
            return res.status(400).json({ message: "Provided email is not valid." });
        }
        // Check password secure level
        if (password.length <= 8) {
            return res
                .status(400)
                .json({ message: "Provided password are too short. " });
        }
        // Handle existent email enter
        const existingUser = yield (0, users_1.getUserByEmail)(email);
        if (existingUser) {
            return res.status(400).json({
                message: "A account with given email is already registered on this website.",
            });
        }
        /* Registration part. Sure, only in a way if all checking are passed */
        // Hash given password
        const salt = yield bcrypt_1.default.genSalt(12);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield (0, users_1.createUser)({ email: email, password: hash });
        return res.status(201).json(newUser).end();
    }
    catch (error) {
        return res.status(400).json({
            message: "Something went wrong on 'signUp' controller.",
            errorObj: error,
        });
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check email for validity
        if (!email.includes("@")) {
            return res.status(400).json({ message: "Given email are not valid." });
        }
        // Next, guess if user with given email are exist in db or not
        const existingUser = yield (0, users_1.getUserByEmail)(email);
        if (!existingUser) {
            return res.status(400).json({
                message: "User with given email is not present on our database.",
            });
        }
        // Sign the token and send it if the password is correct
        if (yield bcrypt_1.default.compare(password, existingUser.password)) {
            const token = jsonwebtoken_1.default.sign({
                id: existingUser._id,
                email: existingUser.email,
            }, JWT_SECRET);
            return res.status(200).json({ data: token });
        }
        return res.status(400).json({
            message: "Incorrect password.",
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Something went wrong on 'login' controller.",
            errorObj: error,
        });
    }
});
exports.login = login;
