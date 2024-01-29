import {PoligonalModel} from "./../ModelElements/PoligonalModel.js";
import {Scene} from "./../ModelElements/Scene.js";
import {Flash} from "./../ModelElements/Flash.js";
import {Camera} from "./../ModelElements/Camera.js";

export class ModelStore{
  models;
  scenes;
  flash;
  cameras;
  #changedObserver;
  constructor(changedObserver){
    this.#changedObserver = changedObserver;
    this.models = [new PoligonalModel()];
    this.scenes = [new Scene()];
    this.mflash = [new Flash()];
    this.cameras = [new Camera()];

  }
}