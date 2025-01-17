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

import { CreateCompletionResponseChoicesInner } from '../models/CreateCompletionResponseChoicesInner.js';
import { CreateCompletionResponseUsage } from '../models/CreateCompletionResponseUsage.js';
import { HttpFile } from '../http/http.js';

export class CreateCompletionResponse {
    'id': string;
    'object': string;
    'created': number;
    'model': string;
    'choices': Array<CreateCompletionResponseChoicesInner>;
    'usage'?: CreateCompletionResponseUsage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "choices",
            "baseName": "choices",
            "type": "Array<CreateCompletionResponseChoicesInner>",
            "format": ""
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "CreateCompletionResponseUsage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateCompletionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

