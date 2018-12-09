export interface IPlotpoint {

  id:number;
  sequence:number;
  name:string;
  thread:string;
  follows:number
  description:string;
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
}
