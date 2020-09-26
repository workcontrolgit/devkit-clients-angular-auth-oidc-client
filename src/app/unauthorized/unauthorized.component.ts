import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-unauthorized',
    templateUrl: 'unauthorized.component.html',
})
export class UnauthorizedComponent implements OnInit {
    constructor(private authservice: AuthService,) {}

    ngOnInit() {}

    login() {
        this.authservice.doLogin();
      }    
}
