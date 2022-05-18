import * as mmmh from "../src";
import { describe, it } from "mocha";
import assert from "assert";

describe("debounce", () => {
	it("should debounce", done => {
		let counter = 0;
		let increment = mmmh.debounce(() => counter++, 25);
		increment(); increment(); increment(); increment(); increment();
		setTimeout(increment, 10);
		setTimeout(() => {
			assert(counter === 1);
			done();
		}, 50);
	});
});
