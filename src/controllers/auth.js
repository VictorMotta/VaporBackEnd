import { usersCollection } from "../config/databases.js";
import bcryt from "bcryptjs";

export async function signUp(req, res) {
  const { name, avatar, email, password } = req.body;

  try {
    const userAlreadyExists = await usersCollection.findOne({
      $or: [({ email }, { name })],
    });

    if (userAlreadyExists) {
      return res.status(409).send("Username or email already exists");
    }
  } catch (error) {
    console.log(
      `signUp: findOne error for name:${name} with email:${email} !`,
      error.message
    );
    res.status(500).send(error.message);
  }

  const encryptedPassword = await bcryt.hash(password, 10).catch((err) => {
    console.log(
      `"signUp: bcrypt.hash error for  password:"`,
      password,
      err.message
    );
  });

  const now = new Date();

  const user = await usersCollection
    .insertOne({
      name,
      avatar,
      email,
      password: encryptedPassword,
      createdAt: now,
      updatedAt: now,
    })
    .catch((err) => {
      console.log("signUp: insertOne error for user:", user, err.message);
    });
  if (!user) {
    return res.status(500).send("Error creating user");
  }

  return res.status(201).send("User created");
}
