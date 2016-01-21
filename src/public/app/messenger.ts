'use strict';

interface IMessenger {
  send(message: string): void;
}

class Messenger implements IMessenger {

  public send(message: string): void {
    console.log('Messenger: ' + message);
  }
}

export default Messenger;
