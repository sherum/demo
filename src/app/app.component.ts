import {Component, OnInit} from '@angular/core';
import {OidcService} from './core/oidc.service';
import {AccountService} from './core/account.service';
import {Router} from '@angular/router';
import {AuthService} from './story/shared/services/auth.service';
import {AuthFireService} from './auth-fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  userName:string = "TESTING";

  constructor(public authService: AuthService,
              private oidcService:OidcService,
              private router:Router,
              private fireService:AuthFireService) {


  }

  ngOnInit() {

    this.fireService.selectUserChanges$.subscribe(
      user => {
        if(user) {
          this.userName = user.email
        }
      }

    );
    // if (window.location.href.indexOf('?postLogout=true') > 0) {
    //   this.oidcService.signoutRedirectCallback().then(() => {
    //     let url: string = this.router.url.substring(
    //       0,
    //       this.router.url.indexOf('?')
    //     );
    //     this.router.navigateByUrl(url);
    //   });
    // }
    // if(localStorage.getItem("oidc.user:https://writersauce.auth0.com:HdgAy3QQGqPLtOLdfWw7tR3spPnz55eb")){
    //   let current = JSON.parse(
    //     localStorage.getItem("oidc.user:https://writersauce.auth0.com:HdgAy3QQGqPLtOLdfWw7tR3spPnz55eb"));
    //   this.userName = current.profile.name;
    // }

  }




  isLoggedIn():boolean{
    return this.fireService.isLoggedIn();
  }

  getUserName(){
    this.userName = this.fireService.getUserName();
  }

  logout(){
    this.fireService.logout();
  }


}

