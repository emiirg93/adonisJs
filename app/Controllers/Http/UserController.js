"use strict";

const User = use("App/Models/User");

class UserController {
  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
  //se llama asi porque la convencion dice que store guarda con ese nombre en la base un registro.
  async store({ request }) {
    const { email, password } = request.all();

    console.log(email, password);
    const user = await User.create({
      email,
      password,
      username: email
    });

    return this.login(...arguments);
  }
}

module.exports = UserController;
