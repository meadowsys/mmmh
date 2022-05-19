// heavily took inspiration from underscore
// https://underscorejs.org

/**
 * delay calling a function until a certain amount of time has passed that the function
 * has not been called.
 *
 * @param fn function to call. Simple function, no parameters, no this, no return value.
 * @param wait time (in miliseconds) to wait
 * @param immediate whether or not to call the function immediately, instead of after the function ends.
 * @returns debounced function. Call this instead of the original
 */
function debounce(
	fn: (this: void) => void,
	wait: number,
	immediate = false
): (this: void) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	function call() {
		timeout = null;
		if (!immediate) fn();
	}

	return function() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = setTimeout(call, wait);
			return;
		}

		if (immediate) fn();
		timeout = setTimeout(call, wait);
	}
}

export default debounce;
