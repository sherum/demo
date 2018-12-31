import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import {WebStorageStateStore} from 'oidc-client';
import {Constants} from '../../../core/oidc.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _idToken:string;
  private _accessToken:string;
  private _expiresAt:number;
  public userStore: WebStorageStateStore;


  auth0 = new auth0.WebAuth({
    clientID: 'HdgAy3QQGqPLtOLdfWw7tR3spPnz55eb',
    domain: 'writersauce.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/story',
    scope: 'openid profile stories',
    metadata: {
      authorization_endpoint: 'https://writersauce.auth0.com/authorize?audience=https://writersauce.com/api/stories/v1',
      issuer: 'https://writersauce.auth0.com',
      jwks_uri: 'https://writersauce.auth0.com/.well-known/jwks.json',
      end_session_endpoint:  'https://writersauce.auth0.com/v2/logout?returnTo=http://localhost:4200',
    }
  });

  constructor(public router: Router) {
    this.userStore = new WebStorageStateStore({store:window.localStorage})
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();

  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/story']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem("token",JSON.stringify(authResult));
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewSession(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {

    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    // overwrite token in localStorage
    localStorage.setItem("oidc.user:https://writersauce.auth0.com:HdgAy3QQGqPLtOLdfWw7tR3spPnz55eb",'');

    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }


}
