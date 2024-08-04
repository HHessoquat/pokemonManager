import {Images} from "./Images";

export interface Pokemon {
  id:number;
  name: string;
  types:any[];
  height: number;
  weight: number;
  sprites: Images;
}
