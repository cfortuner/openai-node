import { HttpLibrary } from "./http/http.js";
import { Middleware, PromiseMiddleware, PromiseMiddlewareWrapper } from "./middleware.js";
import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "./http/isomorphic-fetch.js";
import { BaseServerConfiguration, server1 } from "./servers.js";
import { configureAuthMethods, AuthMethods, AuthMethodsConfiguration } from "./auth/auth.js";

export interface Configuration {
    readonly baseServer: BaseServerConfiguration;
    readonly httpApi: HttpLibrary;
    readonly middleware: Middleware[];
    readonly authMethods: AuthMethods;
    readonly organization?: string;
}


/**
 * Interface with which a configuration object can be configured.
 */
export interface ConfigurationParameters {
    /**
     * Default server to use
     */
    baseServer?: BaseServerConfiguration;
    /**
     * HTTP library to use e.g. IsomorphicFetch
     */
    httpApi?: HttpLibrary;
    /**
     * The middlewares which will be applied to requests and responses
     */
    middleware?: Middleware[];
    /**
     * Configures all middlewares using the promise api instead of observables (which Middleware uses)
     */
    promiseMiddleware?: PromiseMiddleware[];
    /**
     * Configuration for the available authentication methods
     */
    authMethods?: AuthMethodsConfiguration
    /**
     * OpenAI organization id
     *
     * @type {string}
     * @memberof Configuration
     */
    organization?: string;
}

/**
 * Configuration factory function
 *
 * If a property is not included in conf, a default is used:
 *    - baseServer: server1
 *    - httpApi: IsomorphicFetchHttpLibrary
 *    - middleware: []
 *    - promiseMiddleware: []
 *    - authMethods: {}
 *
 * @param conf partial configuration
 */
export function createConfiguration(conf: ConfigurationParameters = {}): Configuration {
    const configuration: Configuration = {
        baseServer: conf.baseServer !== undefined ? conf.baseServer : server1,
        httpApi: conf.httpApi || new DefaultHttpLibrary(),
        middleware: conf.middleware || [],
        authMethods: configureAuthMethods(conf.authMethods),
        ...(conf.organization && { organization: conf.organization })
    };
    if (conf.promiseMiddleware) {
        conf.promiseMiddleware.forEach(
            m => configuration.middleware.push(new PromiseMiddlewareWrapper(m))
        );
    }
    return configuration;
}