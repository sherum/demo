import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAuth} from '../../story/shared/model/auth';
import {OidcService} from '../../core/oidc.service';
import {AuthService} from '../../story/shared/services/auth.service';
import {AuthFireService} from '../../auth-fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loggedIn:boolean;


  constructor(private oidcService:OidcService,
              private authService:AuthService,
              private fireService:AuthFireService) {
  }

  ngOnInit() {
  //  this.loggedIn = this.oidcService.isLoggedIn();
  }

  twitterSignIn(){
    this.fireService.signInWithTwitter();
  }

  googleSignIn(){
    this.fireService.signInWithGoogle();
  }

  facebookSignIn(){
    this.fireService.signInWithFacebook();
  }

  emailSignIn(){
    this.fireService.signInWithEmail();
  }

  logout(){
    this.fireService.logout();
  }

  isLoggedIn(){
    this.fireService.isLoggedIn();
  }
}
