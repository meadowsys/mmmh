import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("reverse string", () => {
	test("it should reverse string", () => {
		assert(
			mmmh.reverse_string("abcde") === "edcba",
			"string should be reversed"
		);
		assert(
			mmmh.reverse_string("afwoijsgloesgjoesejowgegwojsi") === "isjowgegwojeseojgseolgsjiowfa",
			"string should be reversed"
		);
	});
});
