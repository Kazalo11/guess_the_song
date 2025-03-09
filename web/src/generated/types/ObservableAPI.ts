import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Artist } from '../models/Artist';
import { AuthUrlResponse } from '../models/AuthUrlResponse';
import { GetSpotifyAuthUrl500Response } from '../models/GetSpotifyAuthUrl500Response';
import { TokenResponse } from '../models/TokenResponse';

import { SpotifyApiRequestFactory, SpotifyApiResponseProcessor} from "../apis/SpotifyApi";
export class ObservableSpotifyApi {
    private requestFactory: SpotifyApiRequestFactory;
    private responseProcessor: SpotifyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SpotifyApiRequestFactory,
        responseProcessor?: SpotifyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SpotifyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SpotifyApiResponseProcessor();
    }

    /**
     * Gets current access token for user
     * Gets current access token
     */
    public getAccessTokenWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<TokenResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAccessToken(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccessTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets current access token for user
     * Gets current access token
     */
    public getAccessToken(_options?: ConfigurationOptions): Observable<TokenResponse> {
        return this.getAccessTokenWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TokenResponse>) => apiResponse.data));
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     */
    public getSpotifyAuthUrlWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<AuthUrlResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getSpotifyAuthUrl(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSpotifyAuthUrlWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     */
    public getSpotifyAuthUrl(_options?: ConfigurationOptions): Observable<AuthUrlResponse> {
        return this.getSpotifyAuthUrlWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<AuthUrlResponse>) => apiResponse.data));
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param [name] name of the spotify artist
     */
    public searchForArtistsWithHttpInfo(name?: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<Artist>>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.searchForArtists(name, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchForArtistsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param [name] name of the spotify artist
     */
    public searchForArtists(name?: string, _options?: ConfigurationOptions): Observable<Array<Artist>> {
        return this.searchForArtistsWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<Array<Artist>>) => apiResponse.data));
    }

}
