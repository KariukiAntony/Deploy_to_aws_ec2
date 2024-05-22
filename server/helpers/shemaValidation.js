const joi = require("joi");

exports.registerSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().min(3).required(),
  confirm_password: joi.ref("password"),
});

exports.urlSchema = joi.object({
  title: joi.string().min(3).max(30).required(),
  originalUrl: joi.string().required(),
});
