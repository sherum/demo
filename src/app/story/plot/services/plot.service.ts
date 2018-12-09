import {Injectable} from '@angular/core';
import {IPlotLine, IPlotpoint} from '../model/plotpoint';

@Injectable()
export class PlotService {


  threadLabel: { [name: string]: string } = {"main": "#66cc00"};


  getThreadColor(threadName: string): string {
    threadName = threadName.trim();
    let label = this.threadLabel[threadName];
    if (!label) {
      label = this.generateRandomColor();
      this.threadLabel[threadName] = label;
    }
    return label;
  }

  generateRandomColor(): string {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    let element = hex[Math.floor(Math.random() * 17)];
    let i;
    for (i = 0; i < 6; i++) {
      color.concat(element);
    }
    return color;
  }

  generateId(list: IPlotpoint[]): number {
    let points = list.sort((a, b) => a.id - b.id);
    return points.pop().id + 1;

  }

  generateNewPlotLine(currentPlotWeb: IPlotLine[]): IPlotLine {
    let plotpoint = this.generateNewPlot();
    let newplotLine: IPlotLine ={
      name:"new plot line",
      points:[plotpoint]
    }
return newplotLine;
  }

  generateNewPlot():IPlotpoint {
    let newplot = {
      id: 100,
      sequence: 0,
      name: "new name",
      thread: 'new thread',
      follows: 0,
      description: "new description"
    }
    return newplot;


  }


}


