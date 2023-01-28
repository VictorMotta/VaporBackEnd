import { checkoutsCollection, usersCollection } from "../config/databases.js";

export async function createCheckout(req, res) {
  let { cardNumber, validDate, cardName, cpf, products, total } = req.body;

  const { idUser } = res.locals.session;

  const info = {
    idUser,
    checkout: {
      cardName,
      validDate,
      cardNumber,
      cpf,
    },
    products,
    total,
  };

  // check if user exists
  try {
    const userExists = await usersCollection.findOne({ _id: idUser });
    if (!userExists) return res.status(401).send("User not found");

    await checkoutsCollection.insertOne(info);
    return res.status(201).send("Checkout created");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
