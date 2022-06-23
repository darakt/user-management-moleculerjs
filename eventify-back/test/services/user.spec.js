"use strict";

import { ServiceBroker } from "moleculer";
import userService from "../../services/user.service";


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

  it("Should create a user", async () => {
    const res = await broker.call("user.create", {
      username: "Pum",
      firstname: "Pam",
      lastname: "Pom",
      password: "Pem",
    });
    console.log(res);
  });
});
