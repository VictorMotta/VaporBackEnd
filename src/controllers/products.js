import { productsCollection } from "../config/databases.js";

export async function products(req, res) {
  try {
    const products = productsCollection.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
