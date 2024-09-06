"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../controllers/users");
function usersRouter(router) {
    router.get("/users", users_1.getUsers);
    router.get("/message", users_1.getMessage);
    router.get("/users/:id", users_1.getUser);
    router.delete("/users/:id", users_1.deleteUser);
}
exports.default = usersRouter;
