import {
    TnsOaOpenIdProviderOptions,
    TnsOaProvider,
    TnsOaProviderOptions,
    TnsOaProviderType
} from "nativescript-oauth2/providers";
import {ITnsOAuthTokenResult} from "nativescript-oauth2";

export interface TnsOaMyCustomProviderOptions extends TnsOaOpenIdProviderOptions {
}

export class OktaProviderTns implements TnsOaProvider {
    authority = 'https://dev-710796.okta.com';
    authorizeEndpoint = "/oauth2/v1/authorize";
    cookieDomains: string[] = ["okta"];
    options: TnsOaProviderOptions;
    providerType: TnsOaProviderType = 'okta';
    tokenEndpoint = '/oauth2/v1/token';
    tokenEndpointBase = 'https://dev-710796.okta.com';

    constructor(options: TnsOaMyCustomProviderOptions) {
        this.options = options;
    }

    public parseTokenResult(jsonData): ITnsOAuthTokenResult {
        return jsonData;
    }
}
