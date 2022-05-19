// heavily took inspiration from underscore
// https://underscorejs.org

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

	return function(...args) {
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
