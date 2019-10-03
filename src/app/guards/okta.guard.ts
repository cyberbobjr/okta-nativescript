import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "@src/app/services/auth-service";

@Injectable({
    providedIn: 'root'
})
export class OktaGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isTokenValid().then((isConnected: boolean) => {
            return isConnected ? true : this.router.parseUrl('/login');
        })
    }
}
