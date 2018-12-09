import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAuth} from '../../../story/shared/model/auth';
import {IStory} from '../../../story/model/story';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private authorizedSubject:BehaviorSubject<boolean> = new BehaviorSubject(false) ;
  authorizedSourceChanges$ = this.authorizedSubject.asObservable();
  constructor() { }

  changeAuthorizedState(auth:boolean){
    this.authorizedSubject.next(auth);
  }


  login(){

  }

  logout(){

  }
}
