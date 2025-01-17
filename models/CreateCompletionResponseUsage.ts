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

export class CreateCompletionResponseUsage {
    'prompt_tokens': number;
    'completion_tokens': number;
    'total_tokens': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "promptTokens",
            "baseName": "prompt_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "completionTokens",
            "baseName": "completion_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalTokens",
            "baseName": "total_tokens",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateCompletionResponseUsage.attributeTypeMap;
    }

    public constructor() {
    }
}

