import * as mmmh from "../src";
import { describe, test } from "mocha";
import { assert } from "./testutil";

describe("debounce", () => {
	test("it debounce", done => {
		let counter = 0;
		let increment = mmmh.debounce(() => counter++, 25);

		increment();
		increment();
		increment();
		increment();
		increment();
		setTimeout(increment, 10);

		setTimeout(() => {
			assert(counter === 1, "counter should be debounced");
			done();
		}, 50);
	});

	test("it debounce immediately", done => {
		let counter = 0;
		let increment = mmmh.debounce(() => counter++, 25, true);

		increment();
		increment();
		increment();
		increment();
		increment();
		assert(counter === 1, "counter should be immediately called but debounced");

		setTimeout(() => {
			assert(counter === 1, "counter should not change with nothing happened");

			increment();
			assert(counter === 2, "counter should increment after debounce time passes");

			done();
		}, 50);
	});
});
