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

import { CreateAnswerRequestStop } from '../models/CreateAnswerRequestStop.js';
import { HttpFile } from '../http/http.js';

export class CreateAnswerRequest {
    /**
    * ID of the model to use for completion. You can select one of `ada`, `babbage`, `curie`, or `davinci`.
    */
    'model': string;
    /**
    * Question to get answered.
    */
    'question': string;
    /**
    * List of (question, answer) pairs that will help steer the model towards the tone and answer format you'd like. We recommend adding 2 to 3 examples.
    */
    'examples': Array<any>;
    /**
    * A text snippet containing the contextual information used to generate the answers for the `examples` you provide.
    */
    'examples_context': string;
    /**
    * List of documents from which the answer for the input `question` should be derived. If this is an empty list, the question will be answered based on the question-answer examples.  You should specify either `documents` or a `file`, but not both. 
    */
    'documents'?: Array<string>;
    /**
    * The ID of an uploaded file that contains documents to search over. See [upload file](/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose.  You should specify either `documents` or a `file`, but not both. 
    */
    'file'?: string;
    /**
    * ID of the model to use for [Search](/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`.
    */
    'search_model'?: string;
    /**
    * The maximum number of documents to be ranked by [Search](/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost.
    */
    'max_rerank'?: number;
    /**
    * What [sampling temperature](https://towardsdatascience.com/how-to-sample-from-language-models-682bceb97277) to use. Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer.
    */
    'temperature'?: number;
    /**
    * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response.  The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case.  When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs. 
    */
    'logprobs'?: number;
    /**
    * The maximum number of tokens allowed for the generated answer
    */
    'max_tokens'?: number;
    'stop'?: CreateAnswerRequestStop;
    /**
    * How many answers to generate for each question.
    */
    'n'?: number;
    /**
    * Modify the likelihood of specified tokens appearing in the completion.  Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.  As an example, you can pass `{\"50256\": -100}` to prevent the <|endoftext|> token from being generated. 
    */
    'logit_bias'?: any;
    /**
    * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a \"metadata\" field.  This flag only takes effect when `file` is set. 
    */
    'return_metadata'?: boolean;
    /**
    * If set to `true`, the returned JSON will include a \"prompt\" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes.
    */
    'return_prompt'?: boolean;
    /**
    * If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion.
    */
    'expand'?: Array<any>;
    /**
    * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
    */
    'user'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "model",
            "baseName": "model",
            "type": "string",
            "format": ""
        },
        {
            "name": "question",
            "baseName": "question",
            "type": "string",
            "format": ""
        },
        {
            "name": "examples",
            "baseName": "examples",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "examplesContext",
            "baseName": "examples_context",
            "type": "string",
            "format": ""
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "file",
            "baseName": "file",
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
            "name": "maxRerank",
            "baseName": "max_rerank",
            "type": "number",
            "format": ""
        },
        {
            "name": "temperature",
            "baseName": "temperature",
            "type": "number",
            "format": ""
        },
        {
            "name": "logprobs",
            "baseName": "logprobs",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxTokens",
            "baseName": "max_tokens",
            "type": "number",
            "format": ""
        },
        {
            "name": "stop",
            "baseName": "stop",
            "type": "CreateAnswerRequestStop",
            "format": ""
        },
        {
            "name": "n",
            "baseName": "n",
            "type": "number",
            "format": ""
        },
        {
            "name": "logitBias",
            "baseName": "logit_bias",
            "type": "any",
            "format": ""
        },
        {
            "name": "returnMetadata",
            "baseName": "return_metadata",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "returnPrompt",
            "baseName": "return_prompt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAnswerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
