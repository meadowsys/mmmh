/**
 * Returns a pseudorandom number between these two numbers.
 *
 * - If `round = false`, it will be a floating point number that is greater than or equal to
 * low (>= low) and less than high (< high).
 * - If `round = true`, it will round the number down (Math.floor). The resulting number is
 * greater than or equal to low (>= low) and less than high (< high).
 *
 * @param low returned number will be greater than or equal to this
 * @param high returned number will be less than this
 * @param round whether or not to round the number into an integer
 * @returns the number
 */
function rand_from_interval(low: number, high: number, round = false) {
	const num = (Math.random() * Math.abs(high - low)) + low;
	return round ? Math.floor(num) : num;
}

export default rand_from_interval;
