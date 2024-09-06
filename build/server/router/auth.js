"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../controllers/auth");
function authRouter(router) {
    router.post("/users/register", auth_1.signUp);
    router.post("/users/login", auth_1.login);
}
exports.default = authRouter;
