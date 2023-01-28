import joi from "joi";

export const checkoutSchema = joi.object({
  cardNumber: joi.string().min(13).max(16).required(),
  validDate: joi.date().required(),
  cardName: joi.string().required(),
  cpf: joi.number().required(),
  products: joi.array().items(
    joi.object({
      _id: joi.string().required(),
    })
  ),
  total: joi.number().required(),
  ccv: joi.number().required(),
});
