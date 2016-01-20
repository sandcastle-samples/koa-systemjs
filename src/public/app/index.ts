'use strict';

interface IHello {
  say(): void;
}

export default function Hello(): IHello {
  return {
    /**
     * Says hello to the console.
     */
    say(): void {
      console.log('hello!');
    }
  };
}

Hello().say();
