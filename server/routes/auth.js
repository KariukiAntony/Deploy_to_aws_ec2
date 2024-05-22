authRouter = require("express").Router();
const { Register, login } = require("../controllers/auth");

authRouter.post("/auth/register", Register);
authRouter.post("/auth/login", login);

module.exports = { authRouter };
