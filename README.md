# Proof Of Concept - Okta integration with NativeScript

## Pre-requisites
Install the plugin [NativeScript-OAuth2](https://github.com/alexziskind1/nativescript-oauth2)

Register your App :
- Okta (with a Native Apps profile)
- Google Dev Console (if on Android)
- Apple Dev Console (if on iOS)

Create a custom provider for Okta :

```
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
    authority = 'https://{YOUR-SERVER}.okta.com';
    authorizeEndpoint = "/oauth2/v1/authorize";
    cookieDomains: string[] = ["okta"];
    options: TnsOaProviderOptions;
    providerType: TnsOaProviderType = 'okta';
    tokenEndpoint = '/oauth2/v1/token';
    tokenEndpointBase = 'https://{YOUR-SERVER}.okta.com';

    constructor(options: TnsOaMyCustomProviderOptions) {
        this.options = options;
    }

    public parseTokenResult(jsonData): ITnsOAuthTokenResult {
        return jsonData;
    }
}

```

Instanciate your customProvider with your credentials :

```

export function configureOAuthProviders() {
    const oktaProvider: TnsOaProvider = configureOAuthProviderOkta();
    configureTnsOAuth([oktaProvider]);
}

export function configureOAuthProviderOkta() {
    const oktaProviderOptions: TnsOaMyCustomProviderOptions = {
        clientId: `{OKTA-CLIENT-ID}`,
        openIdSupport: "oid-full",
        redirectUri: `{CUSTOM-REDIRECT-SCHEME}:/auth`,
        urlScheme: `{CUSTOM-REDIRECT-SCHEME}`,
        scopes: ["openid", "profile"]
    };
    return new OktaProviderTns(oktaProviderOptions);
}

```

Don't forget to register your custom scheme inside info.plist and AndroidManifest.xml.

And voilà ! your custom Provider is ready to go !

You can check the code in this repo for a fully working sample.
