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
* Token information
*/
export class TokenResponse {
    'access_token': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access_token",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TokenResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
