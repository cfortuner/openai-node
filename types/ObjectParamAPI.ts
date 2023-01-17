import { ResponseContext, RequestContext, HttpFile } from '../http/http.js';
import { Configuration} from '../configuration.js'

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
import { CreateImageRequest } from '../models/CreateImageRequest.js';
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

import { ObservableOpenAIApi } from "./ObservableAPI.js";
import { OpenAIApiRequestFactory, OpenAIApiResponseProcessor} from "../apis/OpenAIApi.js";

export interface OpenAIApiCancelFineTuneRequest {
    /**
     * The ID of the fine-tune job to cancel 
     * @type string
     * @memberof OpenAIApicancelFineTune
     */
    fineTuneId: string
}

export interface OpenAIApiCreateAnswerRequest {
    /**
     * 
     * @type CreateAnswerRequest
     * @memberof OpenAIApicreateAnswer
     */
    createAnswerRequest: CreateAnswerRequest
}

export interface OpenAIApiCreateClassificationRequest {
    /**
     * 
     * @type CreateClassificationRequest
     * @memberof OpenAIApicreateClassification
     */
    createClassificationRequest: CreateClassificationRequest
}

export interface OpenAIApiCreateCompletionRequest {
    /**
     * 
     * @type CreateCompletionRequest
     * @memberof OpenAIApicreateCompletion
     */
    createCompletionRequest: CreateCompletionRequest
}

export interface OpenAIApiCreateEditRequest {
    /**
     * 
     * @type CreateEditRequest
     * @memberof OpenAIApicreateEdit
     */
    createEditRequest: CreateEditRequest
}

export interface OpenAIApiCreateEmbeddingRequest {
    /**
     * 
     * @type CreateEmbeddingRequest
     * @memberof OpenAIApicreateEmbedding
     */
    createEmbeddingRequest: CreateEmbeddingRequest
}

export interface OpenAIApiCreateFileRequest {
    /**
     * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data). 
     * @type HttpFile
     * @memberof OpenAIApicreateFile
     */
    file: HttpFile
    /**
     * The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file. 
     * @type string
     * @memberof OpenAIApicreateFile
     */
    purpose: string
}

export interface OpenAIApiCreateFineTuneRequest {
    /**
     * 
     * @type CreateFineTuneRequest
     * @memberof OpenAIApicreateFineTune
     */
    createFineTuneRequest: CreateFineTuneRequest
}

export interface OpenAIApiCreateImageRequest {
    /**
     * 
     * @type CreateImageRequest
     * @memberof OpenAIApicreateImage
     */
    createImageRequest: CreateImageRequest
}

export interface OpenAIApiCreateImageEditRequest {
    /**
     * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
     * @type HttpFile
     * @memberof OpenAIApicreateImageEdit
     */
    image: HttpFile
    /**
     * A text description of the desired image(s). The maximum length is 1000 characters.
     * @type string
     * @memberof OpenAIApicreateImageEdit
     */
    prompt: string
    /**
     * An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
     * @type HttpFile
     * @memberof OpenAIApicreateImageEdit
     */
    mask?: HttpFile
    /**
     * The number of images to generate. Must be between 1 and 10.
     * @type number
     * @memberof OpenAIApicreateImageEdit
     */
    n?: number
    /**
     * The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
     * @type string
     * @memberof OpenAIApicreateImageEdit
     */
    size?: string
    /**
     * The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
     * @type string
     * @memberof OpenAIApicreateImageEdit
     */
    responseFormat?: string
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type string
     * @memberof OpenAIApicreateImageEdit
     */
    user?: string
}

export interface OpenAIApiCreateImageVariationRequest {
    /**
     * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
     * @type HttpFile
     * @memberof OpenAIApicreateImageVariation
     */
    image: HttpFile
    /**
     * The number of images to generate. Must be between 1 and 10.
     * @type number
     * @memberof OpenAIApicreateImageVariation
     */
    n?: number
    /**
     * The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
     * @type string
     * @memberof OpenAIApicreateImageVariation
     */
    size?: string
    /**
     * The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
     * @type string
     * @memberof OpenAIApicreateImageVariation
     */
    responseFormat?: string
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     * @type string
     * @memberof OpenAIApicreateImageVariation
     */
    user?: string
}

export interface OpenAIApiCreateModerationRequest {
    /**
     * 
     * @type CreateModerationRequest
     * @memberof OpenAIApicreateModeration
     */
    createModerationRequest: CreateModerationRequest
}

export interface OpenAIApiCreateSearchRequest {
    /**
     * The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
     * @type string
     * @memberof OpenAIApicreateSearch
     */
    engineId: string
    /**
     * 
     * @type CreateSearchRequest
     * @memberof OpenAIApicreateSearch
     */
    createSearchRequest: CreateSearchRequest
}

export interface OpenAIApiDeleteFileRequest {
    /**
     * The ID of the file to use for this request
     * @type string
     * @memberof OpenAIApideleteFile
     */
    fileId: string
}

export interface OpenAIApiDeleteModelRequest {
    /**
     * The model to delete
     * @type string
     * @memberof OpenAIApideleteModel
     */
    model: string
}

export interface OpenAIApiDownloadFileRequest {
    /**
     * The ID of the file to use for this request
     * @type string
     * @memberof OpenAIApidownloadFile
     */
    fileId: string
}

export interface OpenAIApiListEnginesRequest {
}

export interface OpenAIApiListFilesRequest {
}

export interface OpenAIApiListFineTuneEventsRequest {
    /**
     * The ID of the fine-tune job to get events for. 
     * @type string
     * @memberof OpenAIApilistFineTuneEvents
     */
    fineTuneId: string
    /**
     * Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned. 
     * @type boolean
     * @memberof OpenAIApilistFineTuneEvents
     */
    stream?: boolean
}

export interface OpenAIApiListFineTunesRequest {
}

export interface OpenAIApiListModelsRequest {
}

export interface OpenAIApiRetrieveEngineRequest {
    /**
     * The ID of the engine to use for this request 
     * @type string
     * @memberof OpenAIApiretrieveEngine
     */
    engineId: string
}

export interface OpenAIApiRetrieveFileRequest {
    /**
     * The ID of the file to use for this request
     * @type string
     * @memberof OpenAIApiretrieveFile
     */
    fileId: string
}

export interface OpenAIApiRetrieveFineTuneRequest {
    /**
     * The ID of the fine-tune job 
     * @type string
     * @memberof OpenAIApiretrieveFineTune
     */
    fineTuneId: string
}

export interface OpenAIApiRetrieveModelRequest {
    /**
     * The ID of the model to use for this request
     * @type string
     * @memberof OpenAIApiretrieveModel
     */
    model: string
}

export class ObjectOpenAIApi {
    private api: ObservableOpenAIApi

    public constructor(configuration: Configuration, requestFactory?: OpenAIApiRequestFactory, responseProcessor?: OpenAIApiResponseProcessor) {
        this.api = new ObservableOpenAIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Immediately cancel a fine-tune job. 
     * @param param the request object
     */
    public cancelFineTune(param: OpenAIApiCancelFineTuneRequest, options?: Configuration): Promise<FineTune> {
        return this.api.cancelFineTune(param.fineTuneId,  options).toPromise();
    }

    /**
     * Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions). 
     * @param param the request object
     */
    public createAnswer(param: OpenAIApiCreateAnswerRequest, options?: Configuration): Promise<CreateAnswerResponse> {
        return this.api.createAnswer(param.createAnswerRequest,  options).toPromise();
    }

    /**
     * Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases. 
     * @param param the request object
     */
    public createClassification(param: OpenAIApiCreateClassificationRequest, options?: Configuration): Promise<CreateClassificationResponse> {
        return this.api.createClassification(param.createClassificationRequest,  options).toPromise();
    }

    /**
     * Creates a completion for the provided prompt and parameters
     * @param param the request object
     */
    public createCompletion(param: OpenAIApiCreateCompletionRequest, options?: Configuration): Promise<CreateCompletionResponse> {
        return this.api.createCompletion(param.createCompletionRequest,  options).toPromise();
    }

    /**
     * Creates a new edit for the provided input, instruction, and parameters
     * @param param the request object
     */
    public createEdit(param: OpenAIApiCreateEditRequest, options?: Configuration): Promise<CreateEditResponse> {
        return this.api.createEdit(param.createEditRequest,  options).toPromise();
    }

    /**
     * Creates an embedding vector representing the input text.
     * @param param the request object
     */
    public createEmbedding(param: OpenAIApiCreateEmbeddingRequest, options?: Configuration): Promise<CreateEmbeddingResponse> {
        return this.api.createEmbedding(param.createEmbeddingRequest,  options).toPromise();
    }

    /**
     * Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit. 
     * @param param the request object
     */
    public createFile(param: OpenAIApiCreateFileRequest, options?: Configuration): Promise<OpenAIFile> {
        return this.api.createFile(param.file, param.purpose,  options).toPromise();
    }

    /**
     * Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param param the request object
     */
    public createFineTune(param: OpenAIApiCreateFineTuneRequest, options?: Configuration): Promise<FineTune> {
        return this.api.createFineTune(param.createFineTuneRequest,  options).toPromise();
    }

    /**
     * Creates an image given a prompt.
     * @param param the request object
     */
    public createImage(param: OpenAIApiCreateImageRequest, options?: Configuration): Promise<ImagesResponse> {
        return this.api.createImage(param.createImageRequest,  options).toPromise();
    }

    /**
     * Creates an edited or extended image given an original image and a prompt.
     * @param param the request object
     */
    public createImageEdit(param: OpenAIApiCreateImageEditRequest, options?: Configuration): Promise<ImagesResponse> {
        return this.api.createImageEdit(param.image, param.prompt, param.mask, param.n, param.size, param.responseFormat, param.user,  options).toPromise();
    }

    /**
     * Creates a variation of a given image.
     * @param param the request object
     */
    public createImageVariation(param: OpenAIApiCreateImageVariationRequest, options?: Configuration): Promise<ImagesResponse> {
        return this.api.createImageVariation(param.image, param.n, param.size, param.responseFormat, param.user,  options).toPromise();
    }

    /**
     * Classifies if text violates OpenAI's Content Policy
     * @param param the request object
     */
    public createModeration(param: OpenAIApiCreateModerationRequest, options?: Configuration): Promise<CreateModerationResponse> {
        return this.api.createModeration(param.createModerationRequest,  options).toPromise();
    }

    /**
     * The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query. 
     * @param param the request object
     */
    public createSearch(param: OpenAIApiCreateSearchRequest, options?: Configuration): Promise<CreateSearchResponse> {
        return this.api.createSearch(param.engineId, param.createSearchRequest,  options).toPromise();
    }

    /**
     * Delete a file.
     * @param param the request object
     */
    public deleteFile(param: OpenAIApiDeleteFileRequest, options?: Configuration): Promise<DeleteFileResponse> {
        return this.api.deleteFile(param.fileId,  options).toPromise();
    }

    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization.
     * @param param the request object
     */
    public deleteModel(param: OpenAIApiDeleteModelRequest, options?: Configuration): Promise<DeleteModelResponse> {
        return this.api.deleteModel(param.model,  options).toPromise();
    }

    /**
     * Returns the contents of the specified file
     * @param param the request object
     */
    public downloadFile(param: OpenAIApiDownloadFileRequest, options?: Configuration): Promise<string> {
        return this.api.downloadFile(param.fileId,  options).toPromise();
    }

    /**
     * Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
     * @param param the request object
     */
    public listEngines(param: OpenAIApiListEnginesRequest = {}, options?: Configuration): Promise<ListEnginesResponse> {
        return this.api.listEngines( options).toPromise();
    }

    /**
     * Returns a list of files that belong to the user's organization.
     * @param param the request object
     */
    public listFiles(param: OpenAIApiListFilesRequest = {}, options?: Configuration): Promise<ListFilesResponse> {
        return this.api.listFiles( options).toPromise();
    }

    /**
     * Get fine-grained status updates for a fine-tune job. 
     * @param param the request object
     */
    public listFineTuneEvents(param: OpenAIApiListFineTuneEventsRequest, options?: Configuration): Promise<ListFineTuneEventsResponse> {
        return this.api.listFineTuneEvents(param.fineTuneId, param.stream,  options).toPromise();
    }

    /**
     * List your organization's fine-tuning jobs 
     * @param param the request object
     */
    public listFineTunes(param: OpenAIApiListFineTunesRequest = {}, options?: Configuration): Promise<ListFineTunesResponse> {
        return this.api.listFineTunes( options).toPromise();
    }

    /**
     * Lists the currently available models, and provides basic information about each one such as the owner and availability.
     * @param param the request object
     */
    public listModels(param: OpenAIApiListModelsRequest = {}, options?: Configuration): Promise<ListModelsResponse> {
        return this.api.listModels( options).toPromise();
    }

    /**
     * Retrieves a model instance, providing basic information about it such as the owner and availability.
     * @param param the request object
     */
    public retrieveEngine(param: OpenAIApiRetrieveEngineRequest, options?: Configuration): Promise<Engine> {
        return this.api.retrieveEngine(param.engineId,  options).toPromise();
    }

    /**
     * Returns information about a specific file.
     * @param param the request object
     */
    public retrieveFile(param: OpenAIApiRetrieveFileRequest, options?: Configuration): Promise<OpenAIFile> {
        return this.api.retrieveFile(param.fileId,  options).toPromise();
    }

    /**
     * Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param param the request object
     */
    public retrieveFineTune(param: OpenAIApiRetrieveFineTuneRequest, options?: Configuration): Promise<FineTune> {
        return this.api.retrieveFineTune(param.fineTuneId,  options).toPromise();
    }

    /**
     * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
     * @param param the request object
     */
    public retrieveModel(param: OpenAIApiRetrieveModelRequest, options?: Configuration): Promise<Model> {
        return this.api.retrieveModel(param.model,  options).toPromise();
    }

}
