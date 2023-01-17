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

import { CreateClassificationResponseSelectedExamplesInner } from '../models/CreateClassificationResponseSelectedExamplesInner.js';
import { HttpFile } from '../http/http.js';

export class CreateClassificationResponse {
    'object'?: string;
    'model'?: string;
    'search_model'?: string;
    'completion'?: string;
    'label'?: string;
    'selected_examples'?: Array<CreateClassificationResponseSelectedExamplesInner>;

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
            "name": "searchModel",
            "baseName": "search_model",
            "type": "string",
            "format": ""
        },
        {
            "name": "completion",
            "baseName": "completion",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "selectedExamples",
            "baseName": "selected_examples",
            "type": "Array<CreateClassificationResponseSelectedExamplesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateClassificationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

