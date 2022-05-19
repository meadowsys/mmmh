/**
 * repeats the character specified from 1 time to maxlen times like so:
 *
 * ```ts
 * repeatwoogly("h", 8)
 * // h
 * // hh
 * // hhh
 * // hhhh
 * // hhhhh
 * // hhhhhh
 * // hhhhhhh
 * // hhhhhhhh
 *
 * repeatwoogly("9", 6)
 * // 9
 * // 99
 * // 999
 * // 9999
 * // 99999
 * // 999999
 *
 * repeatwoogly("H", 2)
 * // H
 * // HH
 * ```
 *
 * dont ask why, i just do the
 *
 * @param str character or string to use
 * @param maxlen the maximum length of the total
 */
export default function repeat_woogly(str: string, maxlen: number) {
	return Array(maxlen)
		.fill(null)
		.map((_, i) => i + 1)
		.map(i => str.repeat(i))
		.join("\n");
}
