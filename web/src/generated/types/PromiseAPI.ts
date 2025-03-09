import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { Artist } from '../models/Artist';
import { AuthUrlResponse } from '../models/AuthUrlResponse';
import { GetSpotifyAuthUrl500Response } from '../models/GetSpotifyAuthUrl500Response';
import { ObservableSpotifyApi } from './ObservableAPI';

import { SpotifyApiRequestFactory, SpotifyApiResponseProcessor} from "../apis/SpotifyApi";
export class PromiseSpotifyApi {
    private api: ObservableSpotifyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SpotifyApiRequestFactory,
        responseProcessor?: SpotifyApiResponseProcessor
    ) {
        this.api = new ObservableSpotifyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     */
    public getSpotifyAuthUrlWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<AuthUrlResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSpotifyAuthUrlWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     */
    public getSpotifyAuthUrl(_options?: PromiseConfigurationOptions): Promise<AuthUrlResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getSpotifyAuthUrl(observableOptions);
        return result.toPromise();
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param [name] name of the spotify artist
     */
    public searchForArtistsWithHttpInfo(name?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<Artist>>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.searchForArtistsWithHttpInfo(name, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param [name] name of the spotify artist
     */
    public searchForArtists(name?: string, _options?: PromiseConfigurationOptions): Promise<Array<Artist>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.searchForArtists(name, observableOptions);
        return result.toPromise();
    }


}



