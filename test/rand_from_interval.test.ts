import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("rand_from_interval test", () => {
	test("it should generate a random number (floating point) within an interval", () => {
		for (let i = 0; i < 100; i++) {
			const random_num = mmmh.rand_from_interval(0, 100);
			assert(
				random_num >= 0 && random_num < 100,
				`number should be within bounds: ${random_num}`
			);
		}
	});

	test("it should generate a random integer within an interval", () => {
		for (let i = 0; i < 100; i++) {
			const random_num = mmmh.rand_from_interval(0, 100, true);
			assert(
				random_num >= 0 && random_num < 100 && Number.isInteger(random_num),
				`number should be within bounds and an integer: ${random_num}`
			);
		}
	});
});
