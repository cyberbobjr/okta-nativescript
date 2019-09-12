import {Injectable, NgZone} from "@angular/core";
import {ITnsOAuthTokenResult, TnsOAuthClient} from "nativescript-oauth2";
import {AuthService} from "@src/app/services/auth-service";

@Injectable({
    providedIn: 'root'
})
export class AuthImpServiceTns extends AuthService {
    private client: TnsOAuthClient = null;

    constructor(private ngZone: NgZone) {
        super();
    }

    public doLogin(): Promise<ITnsOAuthTokenResult> {
        try {
            this.client = new TnsOAuthClient('okta', true);
        } catch (e) {
            console.log(e);
        }
        return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
            setTimeout(() => {
                this.client.loginWithCompletion(
                    (tokenResult: ITnsOAuthTokenResult, error) => {
                        this.ngZone.runOutsideAngular(() => {
                            if (error) {
                                console.log('back to main page with error:');
                                console.log(error);
                                reject(error);
                            } else {
                                console.log('back to main page with access token:');
                                console.log(tokenResult);
                                resolve(tokenResult);
                            }
                        });
                    });
            });
        });
    }
}
