import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/home/home.component';
import {LoginComponent} from '@src/app/login/login.component';
import {AuthImpService} from "@src/app/services/auth-imp.service";
import {AuthService} from "@src/app/services/auth-service";
import {OKTA_CONFIG, OktaAuthModule} from "@okta/okta-angular";
import {ProtectedComponent} from '@src/app/protected/protected.component';

const oktaConfig = {
    issuer: 'https://dev-710796.okta.com/oauth2/default',
    clientId: '0oa1bh9mslWN5R2Ks357',
    redirectUri: 'http://localhost:4200/implicit/callback',
    scopes: ['openid profile']
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProtectedComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OktaAuthModule
    ],
    providers: [
        {provide: AuthService, useClass: AuthImpService},
        {provide: OKTA_CONFIG, useValue: oktaConfig}
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]

})
export class AppModule {
}
