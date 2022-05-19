import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("repeat woogly", () => {
	test("it should do a repeat woogly", () => {
		assert(mmmh.repeat_woogly("H", 2) === "H\nHH", `repeat woogly should return "woogly string"`);
		assert(mmmh.repeat_woogly("h", 8) === "h\nhh\nhhh\nhhhh\nhhhhh\nhhhhhh\nhhhhhhh\nhhhhhhhh", `repeat woogly should return "woogly string"`);
	});
});
