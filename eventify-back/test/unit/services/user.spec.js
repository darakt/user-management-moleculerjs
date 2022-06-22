"use strict";

import { ServiceBroker } from "moleculer";
import TestService from "../../../services/user.service";

describe("Test 'user' service", () => {
	let broker = new ServiceBroker({ logger: false });
	broker.createService(TestService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	describe("Test 'user.hello' action", () => {

		it("should return with 'Hello Pum'", async () => {
			const res = await broker.call("user.create", { username: 'Pum' });
			expect(res).toBe("Hello Pum");
		});

	});

});
