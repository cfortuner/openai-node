export * from '../models/CreateAnswerRequest.js';
export * from '../models/CreateAnswerRequestStop.js';
export * from '../models/CreateAnswerResponse.js';
export * from '../models/CreateAnswerResponseSelectedDocumentsInner.js';
export * from '../models/CreateClassificationRequest.js';
export * from '../models/CreateClassificationResponse.js';
export * from '../models/CreateClassificationResponseSelectedExamplesInner.js';
export * from '../models/CreateCompletionRequest.js';
export * from '../models/CreateCompletionRequestPrompt.js';
export * from '../models/CreateCompletionRequestStop.js';
export * from '../models/CreateCompletionResponse.js';
export * from '../models/CreateCompletionResponseChoicesInner.js';
export * from '../models/CreateCompletionResponseChoicesInnerLogprobs.js';
export * from '../models/CreateCompletionResponseUsage.js';
export * from '../models/CreateEditRequest.js';
export * from '../models/CreateEditResponse.js';
export * from '../models/CreateEmbeddingRequest.js';
export * from '../models/CreateEmbeddingRequestInput.js';
export * from '../models/CreateEmbeddingResponse.js';
export * from '../models/CreateEmbeddingResponseDataInner.js';
export * from '../models/CreateEmbeddingResponseUsage.js';
export * from '../models/CreateFineTuneRequest.js';
export * from '../models/CreateImageRequest.js';
export * from '../models/CreateModerationRequest.js';
export * from '../models/CreateModerationRequestInput.js';
export * from '../models/CreateModerationResponse.js';
export * from '../models/CreateModerationResponseResultsInner.js';
export * from '../models/CreateModerationResponseResultsInnerCategories.js';
export * from '../models/CreateModerationResponseResultsInnerCategoryScores.js';
export * from '../models/CreateSearchRequest.js';
export * from '../models/CreateSearchResponse.js';
export * from '../models/CreateSearchResponseDataInner.js';
export * from '../models/DeleteFileResponse.js';
export * from '../models/DeleteModelResponse.js';
export * from '../models/Engine.js';
export * from '../models/FineTune.js';
export * from '../models/FineTuneEvent.js';
export * from '../models/ImagesResponse.js';
export * from '../models/ImagesResponseDataInner.js';
export * from '../models/ListEnginesResponse.js';
export * from '../models/ListFilesResponse.js';
export * from '../models/ListFineTuneEventsResponse.js';
export * from '../models/ListFineTunesResponse.js';
export * from '../models/ListModelsResponse.js';
export * from '../models/Model.js';
export * from '../models/OpenAIFile.js';

import { CreateAnswerRequest } from '../models/CreateAnswerRequest.js';
import { CreateAnswerRequestStop } from '../models/CreateAnswerRequestStop.js';
import { CreateAnswerResponse } from '../models/CreateAnswerResponse.js';
import { CreateAnswerResponseSelectedDocumentsInner } from '../models/CreateAnswerResponseSelectedDocumentsInner.js';
import { CreateClassificationRequest } from '../models/CreateClassificationRequest.js';
import { CreateClassificationResponse } from '../models/CreateClassificationResponse.js';
import { CreateClassificationResponseSelectedExamplesInner } from '../models/CreateClassificationResponseSelectedExamplesInner.js';
import { CreateCompletionRequest } from '../models/CreateCompletionRequest.js';
import { CreateCompletionRequestPrompt } from '../models/CreateCompletionRequestPrompt.js';
import { CreateCompletionRequestStop } from '../models/CreateCompletionRequestStop.js';
import { CreateCompletionResponse } from '../models/CreateCompletionResponse.js';
import { CreateCompletionResponseChoicesInner } from '../models/CreateCompletionResponseChoicesInner.js';
import { CreateCompletionResponseChoicesInnerLogprobs } from '../models/CreateCompletionResponseChoicesInnerLogprobs.js';
import { CreateCompletionResponseUsage } from '../models/CreateCompletionResponseUsage.js';
import { CreateEditRequest } from '../models/CreateEditRequest.js';
import { CreateEditResponse } from '../models/CreateEditResponse.js';
import { CreateEmbeddingRequest } from '../models/CreateEmbeddingRequest.js';
import { CreateEmbeddingRequestInput } from '../models/CreateEmbeddingRequestInput.js';
import { CreateEmbeddingResponse } from '../models/CreateEmbeddingResponse.js';
import { CreateEmbeddingResponseDataInner } from '../models/CreateEmbeddingResponseDataInner.js';
import { CreateEmbeddingResponseUsage } from '../models/CreateEmbeddingResponseUsage.js';
import { CreateFineTuneRequest } from '../models/CreateFineTuneRequest.js';
import { CreateImageRequest  , CreateImageRequestSizeEnum  , CreateImageRequestResponseFormatEnum    } from '../models/CreateImageRequest.js';
import { CreateModerationRequest } from '../models/CreateModerationRequest.js';
import { CreateModerationRequestInput } from '../models/CreateModerationRequestInput.js';
import { CreateModerationResponse } from '../models/CreateModerationResponse.js';
import { CreateModerationResponseResultsInner } from '../models/CreateModerationResponseResultsInner.js';
import { CreateModerationResponseResultsInnerCategories } from '../models/CreateModerationResponseResultsInnerCategories.js';
import { CreateModerationResponseResultsInnerCategoryScores } from '../models/CreateModerationResponseResultsInnerCategoryScores.js';
import { CreateSearchRequest } from '../models/CreateSearchRequest.js';
import { CreateSearchResponse } from '../models/CreateSearchResponse.js';
import { CreateSearchResponseDataInner } from '../models/CreateSearchResponseDataInner.js';
import { DeleteFileResponse } from '../models/DeleteFileResponse.js';
import { DeleteModelResponse } from '../models/DeleteModelResponse.js';
import { Engine } from '../models/Engine.js';
import { FineTune } from '../models/FineTune.js';
import { FineTuneEvent } from '../models/FineTuneEvent.js';
import { ImagesResponse } from '../models/ImagesResponse.js';
import { ImagesResponseDataInner } from '../models/ImagesResponseDataInner.js';
import { ListEnginesResponse } from '../models/ListEnginesResponse.js';
import { ListFilesResponse } from '../models/ListFilesResponse.js';
import { ListFineTuneEventsResponse } from '../models/ListFineTuneEventsResponse.js';
import { ListFineTunesResponse } from '../models/ListFineTunesResponse.js';
import { ListModelsResponse } from '../models/ListModelsResponse.js';
import { Model } from '../models/Model.js';
import { OpenAIFile } from '../models/OpenAIFile.js';
import { dateFromRFC3339String, dateToRFC3339String, UnparsedObject } from "../util.js";
import { logger } from "../logger.js";

/* tslint:disable:no-unused-variable */
const primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "CreateImageRequestSizeEnum",
    "CreateImageRequestResponseFormatEnum",
]);

let typeMap: {[index: string]: any} = {
    "CreateAnswerRequest": CreateAnswerRequest,
    "CreateAnswerRequestStop": CreateAnswerRequestStop,
    "CreateAnswerResponse": CreateAnswerResponse,
    "CreateAnswerResponseSelectedDocumentsInner": CreateAnswerResponseSelectedDocumentsInner,
    "CreateClassificationRequest": CreateClassificationRequest,
    "CreateClassificationResponse": CreateClassificationResponse,
    "CreateClassificationResponseSelectedExamplesInner": CreateClassificationResponseSelectedExamplesInner,
    "CreateCompletionRequest": CreateCompletionRequest,
    "CreateCompletionRequestPrompt": CreateCompletionRequestPrompt,
    "CreateCompletionRequestStop": CreateCompletionRequestStop,
    "CreateCompletionResponse": CreateCompletionResponse,
    "CreateCompletionResponseChoicesInner": CreateCompletionResponseChoicesInner,
    "CreateCompletionResponseChoicesInnerLogprobs": CreateCompletionResponseChoicesInnerLogprobs,
    "CreateCompletionResponseUsage": CreateCompletionResponseUsage,
    "CreateEditRequest": CreateEditRequest,
    "CreateEditResponse": CreateEditResponse,
    "CreateEmbeddingRequest": CreateEmbeddingRequest,
    "CreateEmbeddingRequestInput": CreateEmbeddingRequestInput,
    "CreateEmbeddingResponse": CreateEmbeddingResponse,
    "CreateEmbeddingResponseDataInner": CreateEmbeddingResponseDataInner,
    "CreateEmbeddingResponseUsage": CreateEmbeddingResponseUsage,
    "CreateFineTuneRequest": CreateFineTuneRequest,
    "CreateImageRequest": CreateImageRequest,
    "CreateModerationRequest": CreateModerationRequest,
    "CreateModerationRequestInput": CreateModerationRequestInput,
    "CreateModerationResponse": CreateModerationResponse,
    "CreateModerationResponseResultsInner": CreateModerationResponseResultsInner,
    "CreateModerationResponseResultsInnerCategories": CreateModerationResponseResultsInnerCategories,
    "CreateModerationResponseResultsInnerCategoryScores": CreateModerationResponseResultsInnerCategoryScores,
    "CreateSearchRequest": CreateSearchRequest,
    "CreateSearchResponse": CreateSearchResponse,
    "CreateSearchResponseDataInner": CreateSearchResponseDataInner,
    "DeleteFileResponse": DeleteFileResponse,
    "DeleteModelResponse": DeleteModelResponse,
    "Engine": Engine,
    "FineTune": FineTune,
    "FineTuneEvent": FineTuneEvent,
    "ImagesResponse": ImagesResponse,
    "ImagesResponseDataInner": ImagesResponseDataInner,
    "ListEnginesResponse": ListEnginesResponse,
    "ListFilesResponse": ListFilesResponse,
    "ListFineTuneEventsResponse": ListFineTuneEventsResponse,
    "ListFineTunesResponse": ListFineTunesResponse,
    "ListModelsResponse": ListModelsResponse,
    "Model": Model,
    "OpenAIFile": OpenAIFile,
}

let oneOfMap: {[index: string]: string[]} = {
    "CreateAnswerRequestStop": ["Array<string>", "string"],
    "CreateCompletionRequestPrompt": ["Array<any>", "Array<number>", "Array<string>", "string"],
    "CreateCompletionRequestStop": ["Array<string>", "string"],
    "CreateEmbeddingRequestInput": ["Array<any>", "Array<number>", "Array<string>", "string"],
    "CreateModerationRequestInput": ["Array<string>", "string"],
};

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        let found: boolean = false;

        const innerSerialize = (data: any, type: string, format: string) => {
            if (data == undefined || type === "any") {
                found = true;
                return data;
            } else if (data instanceof UnparsedObject) {
                found = true;
                return data._data;
            } else if (primitives.includes(type.toLowerCase())) {
                if (typeof data === type.toLowerCase()) {
                    found = true;
                    return data;
                }
                throw new TypeError(`mismatch types '${data}' and '${type}'`);
            } else if (type.startsWith(ARRAY_PREFIX)) {
                if (!Array.isArray(data)) {
                    throw new TypeError(`mismatch types '${data}' and '${type}'`);
                }
                // Array<Type> => Type
                const subType: string = type.substring(ARRAY_PREFIX.length, type.length - 1);
                const transformedData: any[] = [];
                for (const element of data) {
                    transformedData.push(innerSerialize(element, subType, format));
                }
                return transformedData;
            } else if (type.startsWith(TUPLE_PREFIX)) {
                // We only support homegeneus tuples
                const subType: string = type.substring(TUPLE_PREFIX.length, type.length - 1).split(", ")[0];
                const transformedData: any[] = [];
                for (const element of data) {
                    transformedData.push(innerSerialize(element, subType, format));
                }
                return transformedData;
            } else if (type.startsWith(MAP_PREFIX)) {
                // { [key: string]: Type; } => Type
                const subType: string = type.substring(MAP_PREFIX.length, type.length - 3);
                const transformedData: { [key: string]: any } = {};
                for (const key in data) {
                    transformedData[key] = innerSerialize(data[key], subType, format);
                }
                return transformedData;
            } else if (type === "Date") {
                found = true;
                if ("string" === typeof data) {
                    return data;
                }
                if (format === "date" || format === "date-time") {
                    return dateToRFC3339String(data)
                } else {
                    return data.toISOString();
                }
            } else {
                if (enumsMap.has(type)) {
                    return data;
                }
                if (oneOfMap[type]) {
                    const oneOfs: any[] = [];
                    for (const oneOf of oneOfMap[type]) {
                        try {
                            oneOfs.push(innerSerialize(data, oneOf, format));
                            if (found) break;
                        } catch (e) {
                            logger.debug(`could not serialize ${oneOf} (${e})`)
                        }
                    }
                    if (oneOfs.length > 1) {
                        throw new TypeError(`${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`);
                    }
                    if (oneOfs.length === 0) {
                        throw new TypeError(`${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`);
                    }
                    return oneOfs[0];
                }

                if (!typeMap[type]) { // in case we dont know the type
                    return data;
                }

                // Get the actual type of this object
                type = this.findCorrectType(data, type);

                // get the map for the correct type.
                let attributeTypes = typeMap[type].getAttributeTypeMap();
                let instance: {[index: string]: any} = {};
                for (let index in attributeTypes) {
                    let attributeType = attributeTypes[index];
                    instance[attributeType.baseName] = innerSerialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                }
                return instance;
            }
        };

        return innerSerialize(data, type, format);
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined || type === "any") {
            return data;
        } else if (primitives.includes(type.toLowerCase()) && typeof data == type.toLowerCase()) {
            return data;
        } else if (type.startsWith(ARRAY_PREFIX)) {
            // Assert the passed data is Array type
            if (!Array.isArray(data)) {
                throw new TypeError(`mismatch types '${data}' and '${type}'`);
            }
            // Array<Type> => Type
            const subType: string = type.substring(ARRAY_PREFIX.length, type.length - 1);
            const transformedData: any[] = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.deserialize(element, subType, format));
            }
            return transformedData;
            } else if (type.startsWith(TUPLE_PREFIX)) {
            // [Type,...] => Type
            const subType: string = type.substring(TUPLE_PREFIX.length, type.length - 1).split(", ")[0];
            const transformedData: any[] = [];
            for (const element of data) {
                transformedData.push(ObjectSerializer.deserialize(element, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(MAP_PREFIX)) {
            // { [key: string]: Type; } => Type
            const subType: string = type.substring(MAP_PREFIX.length, type.length - 3);
            const transformedData: { [key: string]: any } = {};
            for (const key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            return dateFromRFC3339String(data)
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }
            if (oneOfMap[type]) {
                const oneOfs: any[] = [];
                for (const oneOf of oneOfMap[type]) {
                    try {
                        const d = ObjectSerializer.deserialize(data, oneOf, format);
                        if (!d?._unparsed) {
                            oneOfs.push(d);
                        }
                    } catch (e) {
                        logger.debug(`could not deserialize ${oneOf} (${e})`)
                    }

                }
                if (oneOfs.length !== 1) {
                    return new UnparsedObject(data);
                }
                return oneOfs[0];
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        if (mediaType === "text/event-stream") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
