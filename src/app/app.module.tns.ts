import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptModule} from 'nativescript-angular/nativescript.module';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {AppComponent} from '@src/app/app.component';
import {HomeComponent} from '@src/app/home/home.component';
import {LoginComponent} from '@src/app/login/login.component';
import {AuthImpServiceTns} from "@src/app/services/auth-imp.service.tns";
import {AuthService} from "@src/app/services/auth-service";
import {ProtectedComponent} from '@src/app/protected/protected.component';
import {NativeScriptHttpModule} from "nativescript-angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProtectedComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        AppRoutingModule
    ],
    providers: [
        {provide: AuthService, useClass: AuthImpServiceTns}
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
