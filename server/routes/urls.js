const urlRouter = require("express").Router();

const {
  createUrl,
  getLimitedUrls,
  handleClicks,
  totalUrls,
} = require("../controllers/urls");
const { verifyAccessToken } = require("../helpers/getJwt");

urlRouter.post("/url/create", verifyAccessToken, createUrl);
urlRouter.get("/url/urls", verifyAccessToken, getLimitedUrls);
urlRouter.get("/url/url", verifyAccessToken, handleClicks);
urlRouter.get("/url/count", verifyAccessToken, totalUrls);

module.exports = { urlRouter };
