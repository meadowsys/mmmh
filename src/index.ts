import "./proto";

/**
 * h
 * @return h
 */
export const h = () => "h";

/**
 * repeats the character specified from 1 time to maxlen times like so:
 *
 * ```ts
 * repeatwoogly(8)
 * // h
 * // hh
 * // hhh
 * // hhhh
 * // hhhhh
 * // hhhhhh
 * // hhhhhhh
 * // hhhhhhhh
 *
 * repeatwoogly(6, "9")
 * // 9
 * // 99
 * // 999
 * // 9999
 * // 99999
 * // 999999
 *
 * repeatwoogly(2, "H")
 * // H
 * // HH
 * ```
 *
 * dont ask why, i just do the
 *
 * @param maxlen the maximum length of the total
 * @param char character to use
 * @param total ignore this param, used for recursion
 */
export const repeatwoogly = (maxlen: number, char: string = "h", total: string = char): void =>
   void (total.length > maxlen || console.log(total) || repeatwoogly(maxlen, char, total + char));

/**
 * `Array.prototype.every()` except works for ASYNC lol
 *
 * i think
 */
export async function everyAsync<T>(this: void, arr: Array<T>, predicate: (value: T, index: number, array: Array<T>) => boolean | Promise<boolean>, thisArg?: any): Promise<boolean> {
   for (let h = 0; h < arr.length; h++) if (!await Promise.resolve(predicate.bind(thisArg)(arr[h], h, arr))) return false;
   return true;
}
