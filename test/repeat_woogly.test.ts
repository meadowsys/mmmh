import * as mmmh from "../src";
import { describe, test } from "mocha";
import assert from "assert";

describe("repeat woogly", () => {
	test("it should do a repeat woogly", () => {
		assert(mmmh.repeat_woogly("H", 2) === "H\nHH");
		assert(mmmh.repeat_woogly("h", 8) === "h\nhh\nhhh\nhhhh\nhhhhh\nhhhhhh\nhhhhhhh\nhhhhhhhh");
	});
});
