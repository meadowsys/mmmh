declare global {
   interface String {
      /**
       * lOOLLLLLL
       */
      reverse(): string;
   }
}

String.prototype.reverse = function() {
   return [...this].reverse().join("");
}

export {};
