const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const createError = require("http-errors");
const { authRouter } = require("./routes/auth");
const { userRouter } = require("./routes/user");
const { urlRouter } = require("./routes/urls");

dotenv.config();
require("./helpers/mongoDBHelper");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

app.get("/", async (req, res) => {
  res.status(200).json({
    "Hello there": "Welcome to the url shorter.. ",
  });
});

// register the routes
app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", urlRouter);

// error handling
app.use(async (req, res, next) => {
  const error = createError.NotFound("The page does not exist");
  next(error);
});

app.use(async (error, req, res, next) => {
  const status = error.status || 500;
  res.status(status).json({
    message: error.message,
    status: error.status,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, (error) => {
  if (error) {
    console.error(`An error has occured: ${error}`);
  }
  console.info(`app running on http://127.0.0.1:${port}`);
});
