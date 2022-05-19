/**
 * reverses a string
 *
 * @param str string to reverse
 * @returns the reversed string (original unaffected)
 */
function reverse_string(str: string) {
	return [...str].reverse().join("");
}

export default reverse_string;
