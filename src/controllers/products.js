import { productsCollection } from "../config/databases.js";

export async function products(req, res) {
  const { limit, offset } = req.query;
  if (!limit || !offset) {
    limit = 0;
    skip = 0;
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
