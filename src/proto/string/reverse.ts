declare global {
   interface String {
      reverse(): string;
   }
}

/**
 * lOOLLLLLL
 */
String.prototype.reverse = function() {
   return [...this].reverse().join("");
}

export {};
