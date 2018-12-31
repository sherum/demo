import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OidcService} from '../../core/oidc.service';
import {AuthService} from '../../story/shared/services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {


 @Input() isLoggedIn:boolean;

 currentUser:string;



  constructor(private authService:AuthService, private oidcService:OidcService,private router:Router) { }

  ngOnInit() {
  // this.isLoggedIn = this.authService.();

  }

  login(){
    this.authService.login();
  }

  logout(){
    this.router.navigate(['/']);
    this.isLoggedIn = false;
   this.authService.logout();
  }

  isAuthenticated():boolean{
   return this.authService.isAuthenticated()
  }

}
