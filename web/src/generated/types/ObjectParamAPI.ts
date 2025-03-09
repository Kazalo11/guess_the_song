import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { Artist } from '../models/Artist';
import { ArtistSongResponse } from '../models/ArtistSongResponse';
import { AuthUrlResponse } from '../models/AuthUrlResponse';
import { GetSpotifyAuthUrl500Response } from '../models/GetSpotifyAuthUrl500Response';
import { TokenResponse } from '../models/TokenResponse';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiV1SpotifyArtistArtistIdRandomSongsGetRequest {
    /**
     * ArtistID
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiv1SpotifyArtistArtistIdRandomSongsGet
     */
    artistId: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get random songs for an artist by ID
     * @param param the request object
     */
    public v1SpotifyArtistArtistIdRandomSongsGetWithHttpInfo(param: DefaultApiV1SpotifyArtistArtistIdRandomSongsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArtistSongResponse>> {
        return this.api.v1SpotifyArtistArtistIdRandomSongsGetWithHttpInfo(param.artistId,  options).toPromise();
    }

    /**
     * Get random songs for an artist by ID
     * @param param the request object
     */
    public v1SpotifyArtistArtistIdRandomSongsGet(param: DefaultApiV1SpotifyArtistArtistIdRandomSongsGetRequest, options?: ConfigurationOptions): Promise<ArtistSongResponse> {
        return this.api.v1SpotifyArtistArtistIdRandomSongsGet(param.artistId,  options).toPromise();
    }

}

import { ObservableSpotifyApi } from "./ObservableAPI";
import { SpotifyApiRequestFactory, SpotifyApiResponseProcessor} from "../apis/SpotifyApi";

export interface SpotifyApiGetAccessTokenRequest {
}

export interface SpotifyApiGetSpotifyAuthUrlRequest {
}

export interface SpotifyApiSearchForArtistsRequest {
    /**
     * name of the spotify artist
     * Defaults to: undefined
     * @type string
     * @memberof SpotifyApisearchForArtists
     */
    name?: string
}

export class ObjectSpotifyApi {
    private api: ObservableSpotifyApi

    public constructor(configuration: Configuration, requestFactory?: SpotifyApiRequestFactory, responseProcessor?: SpotifyApiResponseProcessor) {
        this.api = new ObservableSpotifyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets current access token for user
     * Gets current access token
     * @param param the request object
     */
    public getAccessTokenWithHttpInfo(param: SpotifyApiGetAccessTokenRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<TokenResponse>> {
        return this.api.getAccessTokenWithHttpInfo( options).toPromise();
    }

    /**
     * Gets current access token for user
     * Gets current access token
     * @param param the request object
     */
    public getAccessToken(param: SpotifyApiGetAccessTokenRequest = {}, options?: ConfigurationOptions): Promise<TokenResponse> {
        return this.api.getAccessToken( options).toPromise();
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     * @param param the request object
     */
    public getSpotifyAuthUrlWithHttpInfo(param: SpotifyApiGetSpotifyAuthUrlRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<AuthUrlResponse>> {
        return this.api.getSpotifyAuthUrlWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * Get Spotify Authorization URL
     * @param param the request object
     */
    public getSpotifyAuthUrl(param: SpotifyApiGetSpotifyAuthUrlRequest = {}, options?: ConfigurationOptions): Promise<AuthUrlResponse> {
        return this.api.getSpotifyAuthUrl( options).toPromise();
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param param the request object
     */
    public searchForArtistsWithHttpInfo(param: SpotifyApiSearchForArtistsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<Array<Artist>>> {
        return this.api.searchForArtistsWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * Gets spotify related artists from name
     * Get artists based on name
     * @param param the request object
     */
    public searchForArtists(param: SpotifyApiSearchForArtistsRequest = {}, options?: ConfigurationOptions): Promise<Array<Artist>> {
        return this.api.searchForArtists(param.name,  options).toPromise();
    }

}
