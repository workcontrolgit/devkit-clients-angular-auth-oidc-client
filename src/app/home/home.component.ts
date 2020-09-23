import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  profileData$: Observable<any>;
  webapiData$: Observable<any>;
  accessToken$: any;
  isAuthenticated$: Observable<boolean>;
  constructor(
    private authservice: AuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.profileData$ = this.authservice.userData;
    this.isAuthenticated$ = this.authservice.isLoggedIn;
  }

  login() {
    this.authservice.doLogin();
  }

  logout() {
    this.authservice.signOut();
  }

  showtoken() {
    this.accessToken$ = this.authservice.token;
  }  

  callapi() {
    this.webapiData$ = this.httpClient
      .get('https://devkit-api-employeeprofile.azurewebsites.net/api/v1/Persons')
      .pipe(catchError((error) => of(error)));
  }  
}
