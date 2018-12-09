import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAuth} from '../../story/shared/model/auth';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string='';
  secretkey: string='';


  constructor(private loginService:AuthService) {
  }

  ngOnInit() {
  }

  signOn(form) {
    let auth: IAuth;
    auth.name = form.username;
    auth.key = form.secretkey;
    if(auth.name && auth.key){
      this.loginService.changeAuthorizedState(true);
    }else{
      this.loginService.changeAuthorizedState(false);
    }
  }

}
