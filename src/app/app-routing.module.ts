import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from '@src/app/app.routes';
import {OktaLoginRedirectComponent} from "@okta/okta-angular";

@NgModule({
    imports: [RouterModule.forRoot(routes.concat(routes, {
        path: 'testlogin',
        component: OktaLoginRedirectComponent
    }))],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
