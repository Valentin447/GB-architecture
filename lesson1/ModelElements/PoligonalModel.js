import {Poligon} from "./Poligon.js";
import {Texture} from "./Texture.js";

export class PoligonalModel{
  poligons;
  texture;
  constructor(){
    this.texture = [];
    this.poligons = [];
    this.poligons.push = new Poligon();
  }
}