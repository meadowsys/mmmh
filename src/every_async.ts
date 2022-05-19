async function every_async<T, This = void>(
	array: Array<T>,
	predicate: (value: T, index: number, array: Array<T>) => unknown,
	this_arg?: This
): Promise<boolean> {
	const bound_predicate = predicate.bind(this_arg);

	for (let h = 0; h < array.length; h++) {
		if (!await Promise.resolve(bound_predicate(array[h], h, array))) return false;
	}

	return true;
}

export default every_async;
