import {Images} from "./Images";

export interface Pokemon {
  id:number;
  name: string;
  category: string;
  type:String;
  size: number;
  weight: number;
  sprites: Images;
}
