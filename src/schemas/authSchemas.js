import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().required(),
  avatar: joi.string().uri().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(36).required(),
  confirmPassword: joi.ref("password"),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
