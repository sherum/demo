export interface IPlotpoint {


  sequence:number;
  name:string;
  thread:string;

  description:string;
  previous?:IPlotpoint;
  _id?:any;
}

export const threads = [
  'LawnGreen',
  'LightBlue',
  'Khaki',
  'Lavender',
  'HoneyDew'
]

export interface IPlotLine {
  name:string;
  points:IPlotpoint[];
  _id?:any;
}
