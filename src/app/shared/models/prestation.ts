import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI{


  id: number;
  typePresta: string;
  client: string;
  tjmHt = 1200;
  tva = 20;
  nbJours = 1;
  state = State.OPTION;
  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this , obj);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    if(this.tva <= 0){
      return this.totalHt();
    }
    return this.totalHt() * (1 + this.tva / 100);
  }

}
