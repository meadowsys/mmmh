export {};

declare global {
   interface StringConstructor {
      /**
       * h
       * @return h
       */
      h(): string;
   }
}

String.h = function() {
   return "h";
}
