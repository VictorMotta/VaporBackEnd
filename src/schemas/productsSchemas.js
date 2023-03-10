import joi from "joi";

export const addProductSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  category: joi.string().required(),
  price: joi.number().required(),
  images: joi.array().items(joi.string().uri()).min(1).required(),
  promoPercentage: joi.number().min(0).max(100).required(),
});
