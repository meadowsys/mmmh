export {};

declare global {
   interface Math {
      /**
       * Return a pseudorandom number between two provided numbers.
       * @param lower Returned pseudorandom number will be greater than or equal
       *              to this number
       * @param higher Returned pseudorandom number will be less than this number
       */
      randomFromInterval(lower: number, higher: number): number;
   }
}

Math.randomFromInterval = function(lower, higher) {
   return (Math.random() * Math.abs(higher - lower)) + lower;
}
