import {PoligonalModel} from "./PoligonalModel.js";
import {Flash} from "./Flash.js";
import {Camera} from "./Camera.js";

export class Scene{
  id;
  models;
  flashes;
  cameras;
  constructor(){
    this.flashes = [];
    this.models = [new PoligonalModel()];
    this.cameras =[new Camera()];
  }
  method1(type){
    return type;
  }
  method2(type, type2){
    return type;
  }
}