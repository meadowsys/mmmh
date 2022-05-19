import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("h", () => {
	test("h", () => {
		assert(mmmh.h() === "h", "should return h");
	});
});
