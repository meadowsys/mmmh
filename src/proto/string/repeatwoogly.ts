export {};

declare global {
   interface String {
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
      repeatwoogly(maxlen: number): string;
   }
}

String.prototype.repeatwoogly = function(this: string, maxlen) {
   return Array(maxlen)
      .fill(null)
      .map((_, i) => i + 1)
      .map(i => this.repeat(i))
      .join("\n");
}
