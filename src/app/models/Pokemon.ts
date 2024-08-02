import {Images} from "./Images";

export interface Pokemon {
  id:number;
  name: string;
  category: string;
  type:String;
  height: number;
  weight: number;
  sprites: Images;
}
