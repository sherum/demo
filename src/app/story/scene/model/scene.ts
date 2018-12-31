import {IThing} from '../../thing/model/thing';
import {IPerson} from '../../model/story';

export interface IScene {


  sequence:number;
  purpose:string;
  goal:string;
  start:string;
  duration:number;
  unit:string;
  location:ILocation;
  people:IPerson[];
  things:IThing[];

  narrative:string;
  _id?:any;

}

export interface ILocation {
  name:string;
  _id?:any;

}
