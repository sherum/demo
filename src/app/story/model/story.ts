import {IScene} from '../scene/model/scene';
import {IPlotLine, IPlotpoint} from '../plot/model/plotpoint';
import {IThing} from '../thing/model/thing';

export interface IStory {
  id:number;
   author:string;
   title:string;
   suppose:string;
   whatif:string;
    maguffin:string;
   leadPov:string;
   scenes:Array<IScene>;
   plotPoints:Array<IPlotLine>;
   people:Array<string>;
   things:Array<IThing>;
   events:Array<string>;
   locations:Array<string>;


}
