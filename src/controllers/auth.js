import { usersCollection } from "../config/databases.js";

export async function signUp(req, res) {
  const { name, avatar, email, confirmEmail, password, confirmPassword } =
    req.body;

  const userAlreadyExists = await usersCollection
    .findOne({ $or: [({ email }, { name })] })
    .catch((err) => {
      console.log(
        `signUp: findOne error for name:${name} with email:${email} !`,
        err.message
      );
    });
  if (userAlreadyExists) {
    return res.status(409).send("Username or email already exists");
  }

  const user = await usersCollection
    .insertOne({ name, avatar, email, password })
    .catch((err) => {
      console.log("signUp: insertOne error for user:", user, err.message);
    });
  if (!user) {
    return res.status(500).send("Error creating user");
  }

  return res.status(201).send("User created");
}
