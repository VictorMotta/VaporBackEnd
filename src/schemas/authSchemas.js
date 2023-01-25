import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().required(),
  avatar: joi.string().uri().required(),
  email: joi.string().email().required(),
  confirmEmail: joi.ref("email"),
  password: joi.string().min(6).required(),
  confirmPassword: joi.ref("password"),
});
