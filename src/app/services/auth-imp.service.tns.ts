import {Injectable, NgZone} from "@angular/core";
import {ITnsOAuthTokenResult, TnsOAuthClient} from "nativescript-oauth2";
import {AuthService} from "@src/app/services/auth-service";
import {BehaviorSubject} from "rxjs";
import {SecureStorage} from "nativescript-secure-storage";

@Injectable({
    providedIn: 'root'
})
export class AuthImpServiceTns extends AuthService {
    private authClient: any;
    private secureStorage: SecureStorage = new SecureStorage();
    private client: TnsOAuthClient = null;
    public isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private ngZone: NgZone) {
        super();
        this.isTokenValid().then((authenticated: boolean) => {
            this.isAuthenticated$.next(authenticated);
        })
    }

    public isAuthenticated(): boolean {
        return this.isAuthenticated$.getValue();
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
                                this.saveToken(tokenResult);
                                this.isAuthenticated$.next(true);
                                resolve(tokenResult);
                            }
                        });
                    });
            });
        });
    }

    private saveToken(tokenResult: ITnsOAuthTokenResult) {
        this.secureStorage.set({key: 'token', value: JSON.stringify(tokenResult)});
    }

    private loadToken(): Promise<ITnsOAuthTokenResult> {
        return this.secureStorage.get({key: 'token'}).then((data: any) => {
            return JSON.parse(data);
        });
    }

    public isTokenValid(): Promise<boolean> {
        return this.loadToken().then((token: ITnsOAuthTokenResult) => {
            console.log('decode token');
            console.log(this.authClient.token.decode(token.accessToken));
            return !!token;
        });
    }

    private decodeToken(token) {
        let jwt = token.split('.');
        let decodedToken;

        try {
            decodedToken = {
                header: JSON.parse(util.base64UrlToString(jwt[0])),
                payload: JSON.parse(util.base64UrlToString(jwt[1])),
                signature: jwt[2]
            };
        } catch (e) {
            throw new Error('Malformed token');
        }

        return decodedToken;
    }
}
