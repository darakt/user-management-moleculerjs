import User from '../models/user';

const keepNotNull = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== null));

const keepUser = (arr) => arr.map(x => keepNotNull(x.dataValues))

// users.service.js
export default {
  name: "users",

  actions: {
    list: {
      // Expose as "/users/"
      rest: "GET /",
      async handler() {
        let theUsers;
        try {
          theUsers = await User.findAll();
          if (theUsers === null) return {
            code: 404,
            message: `no user found`,
          };
          if (theUsers === undefined) throw new Error("DB is down");
        } catch (err) {
          console.log(err);
          return {
            code: 500,
            message: "something went wrong",
          };        }
        return keepUser(theUsers);
      },
    },

    get: {
      // Expose as "/users/:id"
      rest: "GET /:id",
      async handler(ctx) {
        let theOne
        try {
          theOne = await User.findByPk(ctx.params.id);
          if (theOne === null)
            return {
              code: 404,
              message: `no user found for : id = ${ctx.params.id}`,
            };
          if (theOne === undefined) throw new Error("DB is down");

        } catch (err) {
          console.log(err);
          return {
            code: 500,
            message: "something went wrong",
          };        }
        if (theOne.dataValues) return keepNotNull(theOne.dataValues);
      },
    },

    create: {
      // Expose as "/users/"
      rest: "POST /create/",
      params: {
        username: { type: "string" },
        firstname: { type: "string" },
        lastname: { type: "string" },
        password: { type: "string" }
      },
      async handler(ctx) {
        let newOne;
        try {
          newOne = await User.create({ // more input control (regex, ...)
            username: ctx.params.username,
            firstname: ctx.params.firstname,
            lastname: ctx.params.lastname,
            password: ctx.params.password,
          });
          if (newOne === undefined) throw new Error('DB is down')
        } catch (err) {
          console.log(err); // jsonified then log then return with a more detailed error
          return {
            code: 500,
            message: 'something went wrong'
          }
        }
        return newOne;
      },
    },

    remove: {
      // Expose as "/users/:id"
      rest: "DELETE /:id",
      async handler(ctx) {
        let res;
        try {
          res = await User.destroy({ where: { id: ctx.params.id } })
          if (res === undefined) throw new Error("DB is down");
        } catch (err) {
          console.log(err)
          return {
            code: 500,
            message: "something went wrong",
          };
        }
        if (res === 1) return `DELETE user with id = ${ctx.params.id}`;
        return {
          code: 404,
          message: `no user found for : id = ${ctx.params.id}`
        }
      },
    },
  },
};
