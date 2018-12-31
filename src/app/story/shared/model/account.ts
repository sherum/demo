import {IStory} from '../../model/story';

export interface IAccount {

  accountHolder:string;
  stories?:IStory[];
  _id?:any;
}
