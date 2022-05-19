/**
 * Determines if all the members of an array satisfy the specified test (just like `Array.prototype.every`),
 * except it runs asyncronously and will resolve/await promises returned by the predicate function.
 *
 * This function also resolves/awaits promises from the source array to pass to the predicate. This can be
 * turned off by setting 4th parameter (`await_members`) to false
 *
 * @param array array to operate on
 * @param predicate a function that accepts up to 3 arguments, the value being operated on,
 *    the index of that element in the array, and the array itself
 * @param this_arg an object to bind to `this` in the predicate function
 * @returns a promise which resolves with a boolean of
 *    whether or not every value passed the test.
 */
async function every_async<T, This = void>(
	array: Array<T>,
	predicate: (value: typeof await_members extends true ? T : Awaited<T>, index: number, array: Array<T>) => unknown,
	this_arg?: This,
	await_members: boolean = true
): Promise<boolean> {
	const bound_predicate = predicate.bind(this_arg);

	for (let h = 0; h < array.length; h++) {
		if (!await Promise.resolve(
			bound_predicate(
				await_members ? await Promise.resolve(array[h]) : array[h] as any, // todo attempt to figure out cast?
				h,
				array
			)
		)) return false;
	}

	return true;
}

export default every_async;
