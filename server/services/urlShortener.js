const { urlModel } = require("../models/urlModel");
require("dotenv").config();

class urlShortner {
  constructor() {
    this.model = urlModel;
    this.baseUrl = process.env.baseUrl;
    this.page = 0;
    this.perPage = 5;
    this.userId = null;
    this.data = null;
    this.shortUrl = "";
  }

  initialize(data) {
    this.data = data;
    this.userId = this.data["userId"];
  }

  validateUrl(url) {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return urlPattern.test(url);
  }

  generateRandomString(length = 6) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characters.length);
      result += characters.charAt(index);
    }
    return this.baseUrl + result;
  }

  async shortenUrl() {
    let urls = await this.model.find({}, "shortUrl").exec();
    let generatedUrl = this.generateRandomString();
    let exists = urls.some((urlDoc) => urlDoc.shortUrl == generatedUrl);
    while (exists) {
      generatedUrl = this.generateRandomString();
      exists = urls.some((urlDoc) => urlDoc.shortUrl == generatedUrl);
    }
    this.shortUrl = generatedUrl;
    return this.shortUrl;
  }

  async saveToDB() {
    this.data["shortUrl"] = await this.shortenUrl();
    await new this.model(this.data).save();
  }

  paginateUrls(userId, page = 0, perpage = this.perPage) {
    let urls = urlModel
      .find({ userId: userId })
      .sort({ _id: -1 })
      .skip(page * perpage)
      .limit(perpage);

    return urls;
  }

  handleClicks(url) {
    let updated = urlModel.findOneAndUpdate(
      { shortUrl: url },
      { $inc: { clicks: 1 } },
      { new: true }
    );
    return updated;
  }

  totalUrls(userId) {
    return this.model.find({ userId: userId }).countDocuments();
  }
}

module.exports = { urlShortner };
