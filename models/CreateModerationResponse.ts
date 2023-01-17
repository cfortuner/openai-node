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

import { CreateModerationResponseResultsInner } from '../models/CreateModerationResponseResultsInner.js';
import { HttpFile } from '../http/http.js';

export class CreateModerationResponse {
    'id': string;
    'model': string;
    'results': Array<CreateModerationResponseResultsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<CreateModerationResponseResultsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateModerationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
