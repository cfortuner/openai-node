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

import { HttpFile } from '../http/http.js';

export class CreateCompletionResponseChoicesInnerLogprobs {
    'tokens'?: Array<string>;
    'token_logprobs'?: Array<number>;
    'top_logprobs'?: Array<any>;
    'text_offset'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "tokenLogprobs",
            "baseName": "token_logprobs",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "topLogprobs",
            "baseName": "top_logprobs",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "textOffset",
            "baseName": "text_offset",
            "type": "Array<number>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateCompletionResponseChoicesInnerLogprobs.attributeTypeMap;
    }

    public constructor() {
    }
}

