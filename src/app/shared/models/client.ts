import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {

  id: number;
  name: string;
  email: string;
  image: string;
  state: StateClient;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this , obj);
    }
  }
}
