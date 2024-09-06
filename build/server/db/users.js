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
exports.createUser = exports.deleteUserById = exports.updateUserById = exports.getUserByEmail = exports.getUserById = exports.getAllUsers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: "users" });
const UserModel = mongoose_1.default.model("User", UserSchema);
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.find();
});
exports.getAllUsers = getAllUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.findById(id);
});
exports.getUserById = getUserById;
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.findOne({ email });
});
exports.getUserByEmail = getUserByEmail;
const updateUserById = (id, values) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.findByIdAndUpdate(id, values);
});
exports.updateUserById = updateUserById;
const deleteUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UserModel.findByIdAndDelete(id);
});
exports.deleteUserById = deleteUserById;
const createUser = (values) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new UserModel(values).save().then((user) => user.toObject());
});
exports.createUser = createUser;
exports.default = UserModel;
