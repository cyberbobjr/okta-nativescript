import {Routes} from '@angular/router';

import {HomeComponent} from '@src/app/home/home.component';
import {ProtectedComponent} from "@src/app/protected/protected.component";
import {LoginComponent} from "@src/app/login/login.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
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
