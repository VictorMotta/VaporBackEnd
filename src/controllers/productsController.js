import {
  productsCollection,
  sessionsCollection,
  usersCollection,
} from "../config/databases.js";
import { ObjectID } from "bson";

export async function products(req, res) {
  let { limit, offset } = req.query;
  let { promo } = req.body;
  const { id } = req.params;
  if (!limit || !offset) {
    limit = 0;
    offset = 0;
  } else {
    limit = Number(limit);
    offset = Number(offset);
  }
  try {
    if (id) {
      const products = await productsCollection.findOne({ _id: ObjectID(id) });
      console.log(products);
      return res.status(200).send(products);
    }
    if (promo === true) {
      const products = await productsCollection
        .find({ promoPercentage: { $gt: 0 } })
        .toArray();
      console.log(products);
      return res.status(200).send(products);
    }
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

export async function addProduct(req, res) {
  let { title, price, promoPercentage } = req.body;

  price = Number(price);
  let pricePromo = price - (price * Number(promoPercentage)) / 100;
  pricePromo = pricePromo.toFixed(2);

  try {
    const { idUser } = res.locals.session;
    const user = await usersCollection.findOne({ _id: idUser });
    if (!user) return res.status(401).send("User not found");

    if (user.typeUser !== "admin")
      return res.status(401).send("You have no permission to do this");

    const ProductAlreadyExists = await productsCollection.findOne({ title });
    if (ProductAlreadyExists) {
      return res.status(409).send("This title already exists");
    }
    const product = await productsCollection.insertOne({
      ...req.body,
      pricePromo,
    });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
