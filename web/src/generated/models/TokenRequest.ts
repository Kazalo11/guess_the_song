/**
 * Guess The Song API
 * API for Guess The Song Spotify Integration
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Token request information
*/
export class TokenRequest {
    /**
    * Refresh token
    */
    'refresh_token': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "refresh_token",
            "baseName": "refresh_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
