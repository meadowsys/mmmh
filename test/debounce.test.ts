import * as mmmh from "../src";
import { describe, test } from "mocha";
import assert from "assert";

describe("debounce", () => {
	test("it debounce", done => {
		let counter = 0;
		let increment = mmmh.debounce(() => counter++, 25);
		increment(); increment(); increment(); increment(); increment();
		setTimeout(increment, 10);
		setTimeout(() => {
			assert(counter === 1);
			done();
		}, 50);
	});

	test("it debounce immediately", done => {
		let counter = 0;
		let increment = mmmh.debounce(() => counter++, 25, true);
		increment(); increment(); increment(); increment(); increment();
		assert(counter === 1);
		setTimeout(() => {
			assert(counter === 1);
			increment();
			assert(counter as number /* ok typescript, i changed the number? */ === 2);
			done();
		}, 50);
	});
});
