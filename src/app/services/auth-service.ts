import {ITnsOAuthTokenResult} from "nativescript-oauth2";

export abstract class AuthService {
    doLogin(): Promise<ITnsOAuthTokenResult | undefined> {
        return Promise.resolve(undefined);
    }

    public isTokenValid(): Promise<boolean> {
        return undefined;
    }

    isAuthenticated(): boolean {
        return false;
    }
}

