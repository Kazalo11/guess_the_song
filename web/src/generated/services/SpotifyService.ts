/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artist } from '../models/Artist';
import type { AuthUrlResponse } from '../models/AuthUrlResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpotifyService {
    /**
     * Get Spotify Authorization URL
     * Returns a URL that users can visit to authorize the application with their Spotify account
     * @returns AuthUrlResponse Successfully retrieved authorization URL
     * @throws ApiError
     */
    public static getSpotifyAuthUrl(): CancelablePromise<AuthUrlResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/spotify/auth',
            errors: {
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get artists based on name
     * Gets spotify related artists from name
     * @param name name of the spotify artist
     * @returns Artist Successfully got artists
     * @throws ApiError
     */
    public static searchForArtists(
        name?: string,
    ): CancelablePromise<Array<Artist>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/spotify/search/artists',
            query: {
                'name': name,
            },
            errors: {
                500: `Internal server error`,
            },
        });
    }
}
