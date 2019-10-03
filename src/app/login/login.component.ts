import {Component, OnInit} from '@angular/core';
import {AuthService} from "@src/app/services/auth-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    public doLogin() {
        this.authService.doLogin().then((result) => {
            if (result && result.idToken) {
                this.router.navigateByUrl('/home');
            }
        })
    }

}
