import { v4 as uuid } from "uuid";
import { sessionsCollection, usersCollection } from "../config/databases.js";
import bcryptjs from "bcryptjs";

export async function signUp(req, res) {
  const { name, avatar, email, password } = req.body;
  const { typeuser } = req.headers;

  if (!typeuser || (typeuser !== "user" && typeuser !== "admin")) {
    return res.status(401).send("Você não tem permissão para criar um usuário");
  }

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

  const encryptedPassword = await bcryptjs.hash(password, 10).catch((err) => {
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
      typeUser: typeuser,
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

export async function signIn(req, res) {
  const { email, password } = req.body;
  const token = uuid();

  try {
    const user = await usersCollection.findOne({ email });

    if (user && bcryptjs.compareSync(password, user.password)) {
      const tokenExist = await sessionsCollection.findOne({ idUser: user._id });

      if (!tokenExist) {
        console.log("entrou token não existe");

        await sessionsCollection.insertOne({ idUser: user._id, token });

        const bodyTokenNoExist = {
          name: user.name,
          avatar: user.avatar,
          typeUser: user.typeUser,
          token: token,
        };

        return res.send(bodyTokenNoExist);
      }

      console.log("entrou token existe");
      const bodyTokenExist = {
        name: user.name,
        avatar: user.avatar,
        typeUser: user.typeUser,
        token: tokenExist.token,
      };

      return res.send(bodyTokenExist);
    }

    return res.status(401).send("E-mail ou senha incorretos!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function logoutUser(req, res) {
  const session = res.locals.session;
  console.log(session);

  try {
    await sessionsCollection.deleteOne({ token: session.token });

    return res.send(200);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
