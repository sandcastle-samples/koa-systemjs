'use strict';

import Messenger from './messenger';


interface IHello {
  say(): void;
}

export default function Hello(): IHello {
  return {
    /**
     * Says hello to the console.
     */
    say(): void {

      let msg: Messenger = new Messenger();
      msg.send('hello there!');
    }
  };
}

Hello().say();
