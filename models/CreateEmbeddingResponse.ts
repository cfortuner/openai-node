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

import { CreateEmbeddingResponseDataInner } from '../models/CreateEmbeddingResponseDataInner.js';
import { CreateEmbeddingResponseUsage } from '../models/CreateEmbeddingResponseUsage.js';
import { HttpFile } from '../http/http.js';

export class CreateEmbeddingResponse {
    'object': string;
    'model': string;
    'data': Array<CreateEmbeddingResponseDataInner>;
    'usage': CreateEmbeddingResponseUsage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "object",
            "baseName": "object",
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
            "name": "data",
            "baseName": "data",
            "type": "Array<CreateEmbeddingResponseDataInner>",
            "format": ""
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "CreateEmbeddingResponseUsage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEmbeddingResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

