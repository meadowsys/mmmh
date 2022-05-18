import * as mmmh from "../src";
import { describe, test } from "mocha";
import assert from "assert";

describe("h", () => {
	test("h", () => {
		assert(mmmh.h() === "h");
	});
});
