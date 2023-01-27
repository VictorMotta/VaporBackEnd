import {
  productsCollection,
  sessionsCollection,
  usersCollection,
} from "../config/databases.js";

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
