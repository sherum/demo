import {IScene} from '../scene/model/scene';
import {IPlotLine, IPlotpoint} from '../plot/model/plotpoint';
import {IThing} from '../thing/model/thing';
import {IAccount} from '../shared/model/account';

export interface IStory {

   author:string;
   title:string;
   suppose:string;
   whatif:string;
    maguffin:string;
   leadPov:string;
   scenes:Array<IScene>;
   plotPoints:Array<IPlotLine>;
  _id?:any;
}

export interface IPerson {
    name:string;
  _id?:any;

}
