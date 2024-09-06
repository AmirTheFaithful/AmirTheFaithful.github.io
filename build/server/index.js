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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const mongodb_1 = require("mongodb");
const users_1 = __importDefault(require("./db/users"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/", express_1.default.static(path_1.default.join(__dirname, "static")));
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email && !password) {
        res.status(400).json({ message: "Email and password are missing" });
    }
    const newUser = yield users_1.default.create({ email, password });
    console.log({ email: email, password: password });
    res.status(201).json(newUser).end();
}));
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield users_1.default.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => console.log(error));
}));
app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});
const uri = "mongodb+srv://lego:lego@cluster0.c73o3ks.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.db("admin").command({ ping: 1 });
            console.log("Successfully connected to db!");
            return true;
        }
        catch (error) {
            console.log(`An error occurred: ${error}`);
            return false;
        }
        finally {
            yield client.close();
        }
    });
}
run().catch(console.dir);
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect("mongodb+srv://lego:lego@cluster0.c73o3ks.mongodb.net/?retryWrites=true&w=majority");
mongoose_1.default.connection.on("error", (error) => {
    console.log(`\n--------------------\nAn error handled:\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}\n--------------------\n`);
});
app.use((0, router_1.default)());
