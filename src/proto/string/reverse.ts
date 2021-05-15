declare global {
   interface String {
      /**
       * Reverses the characters in a string.
       *
       * For example, the string `1234` becomes `4321`.
       */
      reverse(): string;
   }
}

String.prototype.reverse = function() {
   return [...this].reverse().join("");
}

export {};
