const { urlSchema } = require("../helpers/shemaValidation");
const createError = require("http-errors");
const { urlShortner } = require("../services/urlShortener");

exports.createUrl = async (req, res, next) => {
  try {
    let data = req.body;
    const { error } = urlSchema.validate(data);
    if (error) {
      throw createError.BadRequest(error.details[0].message);
    }
    let newUrl = new urlShortner();
    newUrl.initialize(data);
    if (!newUrl.validateUrl(data.originalUrl)) {
      throw createError.BadRequest("Invalid url passed");
    }
    data["userId"] = req.payload.aud;
    await newUrl.saveToDB(data);
    res.status(201).json({"status": "succcess", "message": "url added successfully"});
  } catch (error) {
    next(error);
  }
};

exports.getLimitedUrls = async (req, res, next) => {
  try {
    const { page, perpage } = req.query;
    let service = new urlShortner();
    let urls = await service.paginateUrls(req.payload.aud, page, perpage);
    return res.status(200).json(urls);
  } catch (error) {
    next(error);
  }
};

exports.handleClicks = async (req, res, next) => {
  try {
    let { url } = req.body;
    let origUrl = await new urlShortner().handleClicks(url);
    return res.status(301).json(origUrl.originalUrl);
  } catch (error) {
    next(error);
  }
};

exports.totalUrls = async (req, res, next) => {
  try {
    let totalCount = await new urlShortner().totalUrls(req.payload.aud);
    return res.status(200).json({count: totalCount})
  } catch (error) {
    next(error);
  }
};
