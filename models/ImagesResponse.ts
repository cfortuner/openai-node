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

import { ImagesResponseDataInner } from '../models/ImagesResponseDataInner.js';
import { HttpFile } from '../http/http.js';

export class ImagesResponse {
    'created': number;
    'data': Array<ImagesResponseDataInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ImagesResponseDataInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImagesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

