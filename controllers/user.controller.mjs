import { generateHash, verifyHash } from "../utils/auth.mjs";
import { v4 as uuidv4 } from "uuid";

class UserController {
  constructor(db) {
    this.db = db;
  }

  postNewUser = async (request, response) => {
    const body = request.body;
    try {
      const result = await this.db.User.create({
        email: body.email,
        password: generateHash(body.password),
        name: body.name,
        id: uuidv4(),
      });
      console.log("postNewUser result: ", result.toJSON());

      response.send(`new user created successfully with user_id: ${result.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  postLoginSession = async (request, response) => {
    const body = request.body;
    try {
      // 1. get email and password from user table
      console.log("getting user with email: ", body.email);
      const user = await this.db.User.findOne({ where: { email: body.email } });
      console.log("user: ", user);

      // 2. verify password from request body is the same as password (unhashed) in user table
      if (!verifyHash(body.password, user.password)) {
        response.status(401).send("invalid login email or password, try again");
      }

      const sessionHash = generateHash(body.email);
      response.cookie("user_id", `${user.id}`);
      response.cookie("logged_in", `${sessionHash}`);
      response.send(`login successful, session generated: ${sessionHash}`);
    } catch (err) {
      console.log(err);
    }
  };

  getUsers = async (request, response) => {
    const queryParams = request.query;
    // console.log(queryParams);
    let email;
    try {
      if ("email" in queryParams) {
        email = request.query.email;
        const user = await this.db.User.findOne({
          where: {
            email: email,
          },
        });
        console.log("get user from email: ", user.toJSON());
        response.send(user);
      } else {
        let users = await this.db.User.findAll();
        console.log("All users:", JSON.stringify(users, null, 2));
        response.send(users);
      }
    } catch (err) {
      console.log(err);
    }
  };

  getUserFromID = async (request, response) => {
    try {
      const userId = request.params.id;
      const user = await this.db.User.findOne({
        where: {
          id: userId,
        },
      });
      console.log("get user from id: ", user.toJSON());
      response.send(user);
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserController;
