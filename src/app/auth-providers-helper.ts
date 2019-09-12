import {TnsOaProvider, TnsOaProviderGoogle, TnsOaProviderOptionsGoogle} from "nativescript-oauth2/providers";
import {configureTnsOAuth} from "nativescript-oauth2";
import {isAndroid} from "tns-core-modules/platform";
import {OktaProviderTns, TnsOaMyCustomProviderOptions} from "@src/app/providers/oktaProvider";

export function configureOAuthProviders() {
    const oktaProvider: TnsOaProvider = configureOAuthProviderOkta();
    configureTnsOAuth([oktaProvider]);
}

export function configureOAuthProviderOkta() {
    const oktaProviderOptions: TnsOaMyCustomProviderOptions = {
        clientId: `0oa1c0q7ftOdtkf3y357`,
        openIdSupport: "oid-full",
        redirectUri: `com.googleusercontent.apps.505059267680-${getOAuth2Key()}:/auth`,
        urlScheme: `com.googleusercontent.apps.505059267680-${getOAuth2Key()}`,
        scopes: ["openid", "profile"]
    };
    return new OktaProviderTns(oktaProviderOptions);
}

/**
 * @todo : refactorize, technical debt
 */
export function getOAuth2Key() {
    return isAndroid ? "j3dtql1b4jcnros6kgujc5f8u3107cai" : "7jd5snddebqsb030ndnuq8a8uakegcpm";
}
