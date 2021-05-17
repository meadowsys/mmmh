export {};

declare global {
   interface Array<T> {
      /**
       * Determines whether all the members of an array satisfy the specified test, but
       * supporting asynchronous operations and correctly awaiting promises.
       * @param predicate A function that accepts up to three arguments. The every method calls
       * the predicate function for each element in the array until the predicate returns a value
       * which is coercible to the Boolean value false, or until the end of the array.
       * @param thisArg An object to which the this keyword can refer in the predicate function.
       * If thisArg is omitted, undefined is used as the this value.
       */
      everyAsync(predicate: (value: T, index: number, array: Array<T>) => unknown, thisArg?: any): Promise<boolean>;
      /**
       * Determines whether all the members of an array satisfy the specified test, but
       * supporting asynchronous operations and correctly awaiting promises.
       * @param predicate A function that accepts up to three arguments. The every method calls
       * the predicate function for each element in the array until the predicate returns a value
       * which is coercible to the Boolean value false, or until the end of the array.
       * @param thisArg An object to which the this keyword can refer in the predicate function.
       * If thisArg is omitted, undefined is used as the this value.
       */
      everyAsync<S extends T>(predicate: (value: T, index: number, array: Array<T>) => value is S, thisArg?: any): Promise<boolean>;
   }
}

Array.prototype.everyAsync = async function<T>(this: Array<T>, predicate: (value: T, index: number, array: Array<T>) => unknown, thisArg?: any) {
   const boundpredicate = predicate.bind(thisArg);
   for (let h = 0; h < this.length; h++) if (!await Promise.resolve(boundpredicate(this[h], h, this))) return false;
   return true;
}
