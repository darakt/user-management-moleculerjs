import User from '../models/user';

// users.service.js
export default {
  name: "users",

  actions: {
    list: {
      // Expose as "/users/"
      rest: "GET /",
      handler(ctx) {
        return "GET Users list";
      }
    },

    get: {
      // Expose as "/users/:id"
      rest: "GET /:id",
      handler(ctx) {
        return `GET user with Id = ${ctx.params.id}`;
      }
    },

    create: {
      // Expose as "/users/"
      rest: "POST /",
      params: {
        username: { type: "string" }
      },
      async handler(ctx) {
        const newOne = await User.create({
          username: 'Bob'
        })
        const users = await User.findAll();
        console.log(users)
        return newOne;
      }
    },

    update: {
      // Expose as "/users/:id"
      rest: "PUT /:id",
      params: {
        name: { type: "string" }
      },
      handler(ctx) {
        return `UPDATE name of user with id = ${ctx.params.id}. New name: ${
          ctx.params.name
        }`;
      }
    },

    remove: {
      // Expose as "/users/:id"
      rest: "DELETE /:id",
      handler(ctx) {
        return `DELETE user with id = ${ctx.params.id}`;
      }
    }
  }
};
