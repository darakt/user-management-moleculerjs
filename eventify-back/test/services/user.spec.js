"use strict";

import { ServiceBroker } from "moleculer";
import userService from "../../services/user.service";

const aUser = {
  username: "Pum",
  firstname: "Pam",
  lastname: "Pom",
  password: "Pem",
};
const aUserWithId = {
  ...aUser,
  createdAt: "2022-06-23T17:41:51.772Z",
  updatedAt: "2022-06-23T17:41:51.778Z",
  id: 12
};

const allTheUsersRaw = [
    {dataValues: {
      id: 1,
      username: "the one",
      firstname: "tom",
      lastname: "Anderson",
      password: "matrix",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: null,
      updatedAt: null,
    }},
  {
    dataValues: {
      id: 2,
      username: "Pum -- select * from users;",
      firstname: "Pam",
      lastname: "Pom",
      password: "foo",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T08:46:00.000Z",
      updatedAt: "2022-06-23T08:46:00.000Z",
    }
  },
  {
    dataValues: {
      id: 4,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "foo",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T10:42:43.000Z",
      updatedAt: "2022-06-23T10:42:43.000Z",
    }
  },
  {
    dataValues: {
      id: 5,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "foo",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T11:29:42.000Z",
      updatedAt: "2022-06-23T11:29:42.000Z",
    }
  },
  {
    dataValues: {
      id: 7,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "foo",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T11:33:04.000Z",
      updatedAt: "2022-06-23T11:33:04.000Z",
    }
},
  {
    dataValues: {
      id: 8,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "Pem",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T17:30:42.000Z",
      updatedAt: "2022-06-23T17:30:42.000Z",
    }
  },
  {
    dataValues: {
      id: 9,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "Pem",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T17:32:13.000Z",
      updatedAt: "2022-06-23T17:32:13.000Z",
    }
  },
  {
    dataValues: {
      id: 10,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "Pem",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T17:37:10.000Z",
      updatedAt: "2022-06-23T17:37:10.000Z",
    }
  },
  {
    dataValues: {
      id: 11,
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "Pem",
      isComing: null,
      answeredOn: null,
      profilePicture: null,
      pictures: null,
      createdAt: "2022-06-23T17:40:32.000Z",
      updatedAt: "2022-06-23T17:40:32.000Z",
    }
  },
    {
      dataValues: {
        id: 12,
        username: "Pum",
        firstname: "Pam",
        lastname: "Pom",
        password: "Pem",
        isComing: null,
        answeredOn: null,
        profilePicture: null,
        pictures: null,
        createdAt: "2022-06-23T17:41:51.000Z",
        updatedAt: "2022-06-23T17:41:51.000Z",
      }
  }
];

const allTheUsersWithId = [
  {
    id: 1,
    username: "the one",
    firstname: "tom",
    lastname: "Anderson",
    password: "matrix",
  },
  {
    id: 2,
    username: "Pum -- select * from users;",
    firstname: "Pam",
    lastname: "Pom",
    password: "foo",
    createdAt: "2022-06-23T08:46:00.000Z",
    updatedAt: "2022-06-23T08:46:00.000Z",
  },
  {
    id: 4,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "foo",
    createdAt: "2022-06-23T10:42:43.000Z",
    updatedAt: "2022-06-23T10:42:43.000Z",
  },
  {
    id: 5,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "foo",
    createdAt: "2022-06-23T11:29:42.000Z",
    updatedAt: "2022-06-23T11:29:42.000Z",
  },
  {
    id: 7,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "foo",
    createdAt: "2022-06-23T11:33:04.000Z",
    updatedAt: "2022-06-23T11:33:04.000Z",
  },
  {
    id: 8,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "Pem",
    createdAt: "2022-06-23T17:30:42.000Z",
    updatedAt: "2022-06-23T17:30:42.000Z",
  },
  {
    id: 9,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "Pem",
    createdAt: "2022-06-23T17:32:13.000Z",
    updatedAt: "2022-06-23T17:32:13.000Z",
  },
  {
    id: 10,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "Pem",
    createdAt: "2022-06-23T17:37:10.000Z",
    updatedAt: "2022-06-23T17:37:10.000Z",
  },
  {
    id: 11,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "Pem",
    createdAt: "2022-06-23T17:40:32.000Z",
    updatedAt: "2022-06-23T17:40:32.000Z",
  },
  {
    id: 12,
    username: "Pum",
    firstname: "Pam",
    lastname: "Pom",
    password: "Pem",
    createdAt: "2022-06-23T17:41:51.000Z",
    updatedAt: "2022-06-23T17:41:51.000Z",
  },
];

const mockCreate = jest.fn();
mockCreate.mockReturnValueOnce(aUserWithId);

const mockGet = jest.fn();
mockGet
  .mockReturnValueOnce({ dataValues: aUserWithId })
  .mockReturnValueOnce(null)

const mockList = jest.fn();
mockList.mockReturnValueOnce(allTheUsersRaw)

const mockRemove = jest.fn();
mockRemove.mockReturnValueOnce(1)
  .mockReturnValueOnce(0)

jest.mock("../../models/user", () => ({
  create: () => mockCreate(),
  findByPk: () => mockGet(),
  findAll: () => mockList(),
  destroy: () => mockRemove()
}));
let broker;
let service;
describe("Unit test of the userService", () => {
  beforeAll(() => {
    broker = new ServiceBroker({ logger: false });
    service = broker.createService(userService);
    broker.start();
  });
  afterAll(() => {
    broker.stop();
  });

  describe("users.create -", () => {
    it("Should create a user", async () => {
      // add constraint on username and u.t
      const res = await broker.call("users.create", aUser);
      expect(res).toEqual(aUserWithId);
    });

    it("Should respond with an error 500 if the db is not up", async () => {
      const res = await broker.call("users.create", aUser);
      expect(res).toEqual({ code: 500, message: "something went wrong" });
    });
  });

  describe("users.get -", () => {
    it("Should give the user's data you're asking if it exists", async () => {
      const res = await broker.call("users.get", { id: 12 });
      expect(res).toEqual(aUserWithId);
    });
    it("SHould give you a 404 if the user does not exist", async () => {
      const res = await broker.call("users.get", { id: 199 });
      expect(res).toEqual({
        code: 404,
        message: "no user found for : id = 199",
      });
    });
    it("Should respond with an error 500 if the db is not up", async () => {
      const res = await broker.call("users.get", aUser);
      expect(res).toEqual({ code: 500, message: "something went wrong" });
    });
  });

  describe("user.list -", () => {
    it("should give a list of users", async () => {
      const res = await broker.call("users.list");
      expect(res).toEqual(allTheUsersWithId)
    });
    it("Should respond with an error 500 if the db is not up", async () => {
      const res = await broker.call("users.list", aUser);
      expect(res).toEqual({ code: 500, message: "something went wrong" });
    });
  })

  describe("user.remove -", () => {
    it("Should remove a user", async () => {
      const res = await broker.call("users.remove", aUserWithId);
      expect(res).toEqual(`DELETE user with id = ${aUserWithId.id}`);
    });
    it("Should not remove a user that does not exists", async () => {
      const res = await broker.call("users.remove", aUserWithId);
      expect(res).toEqual({
        code: 404,
        message: `no user found for : id = ${aUserWithId.id}`,
      });
    });
    it("Shouldrespond with a 500 if the DB is down", async () => {
      const res = await broker.call("users.remove", { id: 22 });
      expect(res).toEqual({ code: 500, message: "something went wrong" });
    });
  })
});
