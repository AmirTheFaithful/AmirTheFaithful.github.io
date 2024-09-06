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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessage = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const users_1 = require("../db/users");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.getAllUsers)();
        return res.status(200).json(users).end();
    }
    catch (error) {
        return res.status(400).json({
            message: "Something went wrong on 'getUsers' controller.",
            errorObj: error,
        });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract the ID
        const { id } = req.body;
        const user = yield (0, users_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(400).json({
            message: "Something went wrong on 'getUser' controller.",
            errorObj: error,
        });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const user = yield (0, users_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found.",
            });
        }
        yield (0, users_1.deleteUserById)(id);
        return res.status(200).json({
            message: `User with id (${id}) successfully deleted from database.`,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Something went wrong on 'deleteUser' controller.",
            errorObj: error,
        });
    }
});
exports.deleteUser = deleteUser;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({ message: "Hello!" });
    }
    catch (error) {
        return res.status(400).json({ message: "'getMessage' controller failed." });
    }
});
exports.getMessage = getMessage;
