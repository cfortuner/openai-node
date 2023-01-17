/**
 * OpenAI API
 * APIs for sampling from and fine-tuning language models
 *
 * OpenAPI spec version: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FineTune } from '../models/FineTune.js';
import { HttpFile } from '../http/http.js';

export class ListFineTunesResponse {
    'object': string;
    'data': Array<FineTune>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<FineTune>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListFineTunesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

