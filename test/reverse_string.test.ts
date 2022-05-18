import * as mmmh from "../src";
import { describe, test } from "mocha";
import assert from "assert";

describe("reverse string", () => {
	test("it should reverse string", () => {
		assert(mmmh.reverse_string("abcde") === "edcba");
		assert(mmmh.reverse_string("afwoijsgloesgjoesejowgegwojsi") === "isjowgegwojeseojgseolgsjiowfa");
	});
});
