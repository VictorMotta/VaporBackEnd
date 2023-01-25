import { productsCollection } from "../config/databases.js";

export async function products(req, res) {
  let { limit, offset } = req.query;
  if (!limit || !offset) {
    limit = 0;
    offset = 0;
  }
  try {
    const products = await productsCollection
      .find({})
      .skip(offset)
      .limit(limit)
      .toArray();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function productsPromotion(req, res) {
  try {
    const products = await productsCollection
      .find({ pricePromo: { $gt: 0 } })
      .toArray();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
