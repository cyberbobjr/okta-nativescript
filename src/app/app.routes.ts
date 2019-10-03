import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/home/home.component';
import {ProtectedComponent} from "@src/app/protected/protected.component";
import {LoginComponent} from "@src/app/login/login.component";
import {OktaGuard} from "@src/app/guards/okta.guard";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate : [OktaGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth',
        component: ProtectedComponent,
    }
];
