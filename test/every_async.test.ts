import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("every_async", () => {
	test("it loop", async () => {
		const array = [10, 20, 30, 40, 50];
		const res = await mmmh.every_async(array, item => typeof item === "number");
		assert(res, "all elements should be numbers");
	});

	test("it loop with promisy array", async () => {
		const array = [10, 20, 30, 40, 50].map(n => Promise.resolve(n));
		const res = await mmmh.every_async(array, item => typeof item === "number");
		assert(res, "all elements should be promises resolving to numbers");
	});

	test("it loop with waiting promisy in array", async () => {
		const array = [10, 20, 30, 40, 50].map(n => new Promise(r => setTimeout(() => r(n), n)));
		const res = await mmmh.every_async(array, item => typeof item === "number");
		assert(res, "all elements should be promises resolving to numbers");
	});

	test("it loop with promisy-returning predicate", async () => {
		const array = [10, 20, 30, 40, 50];
		const res = await mmmh.every_async(array, item => new Promise(r => setTimeout(() => r(true), item)));
		assert(res, "all elements should be promises resolving to true")
	});

	test("it loop without messing with my promises", async () => {
		const orig_array = [10, 20, 30, 40, 50];
		const array = orig_array.map(n => Promise.resolve(n));

		const res = await mmmh.every_async(array, item => typeof item === "object", null, true);
		assert(res, "all elements should still be promises, every_async did not try to resolve them");

		const res2 = await mmmh.every_async(
			array,
			(item, i) => typeof item === "number" && orig_array[i] === item,
			null,
			false
		);
		assert(res2, "elements should be fine, still resolve to the number that they initially were");
	});

	test("it loop and fail", async () => {
		const array = [10, 20, 30, 40, "50???"];
		const res = await mmmh.every_async(array, item => typeof item === "number");
		assert(!res, "every_async should return false for element not passing predicate test");;

		const array2 = ["10???", 20, 30, 40, 50];
		const res2 = await mmmh.every_async(array2, item => typeof item === "number");
		assert(!res2, "every_async should return false for element not passing predicate test");

		const array3 = [10, "20???", 30, 40, 50];
		const res3 = await mmmh.every_async(array3, item => typeof item === "number");
		assert(!res3, "every_async should return false for element not passing predicate test");
	});

	test("it loop and fail with promisy", async () => {
		const array = [10, 20, 30, 40, 50, false].map(i => Promise.resolve(i));
		const res = await mmmh.every_async(array, item => typeof item === "number");
		assert(!res, "every_async should return false for element not passing predicate test");
	});
});
