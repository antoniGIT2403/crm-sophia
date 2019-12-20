import { State } from '../enums/state.enum';

export interface PrestationI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  tva: number;
  state: State;
  nbJours: number;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
