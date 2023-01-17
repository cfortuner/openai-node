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
import { ObservableOpenAIApi } from './ObservableAPI.js';

import { OpenAIApiRequestFactory, OpenAIApiResponseProcessor} from "../apis/OpenAIApi.js";
export class PromiseOpenAIApi {
    private api: ObservableOpenAIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OpenAIApiRequestFactory,
        responseProcessor?: OpenAIApiResponseProcessor
    ) {
        this.api = new ObservableOpenAIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Immediately cancel a fine-tune job. 
     * @param fineTuneId The ID of the fine-tune job to cancel 
     */
    public cancelFineTune(fineTuneId: string, _options?: Configuration): Promise<FineTune> {
        const result = this.api.cancelFineTune(fineTuneId, _options);
        return result.toPromise();
    }

    /**
     * Answers the specified question using the provided documents and examples.  The endpoint first [searches](/docs/api-reference/searches) over provided documents or files to find relevant context. The relevant context is combined with the provided examples and question to create the prompt for [completion](/docs/api-reference/completions). 
     * @param createAnswerRequest 
     */
    public createAnswer(createAnswerRequest: CreateAnswerRequest, _options?: Configuration): Promise<CreateAnswerResponse> {
        const result = this.api.createAnswer(createAnswerRequest, _options);
        return result.toPromise();
    }

    /**
     * Classifies the specified `query` using provided examples.  The endpoint first [searches](/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](/docs/api-reference/completions) endpoint.  Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases. 
     * @param createClassificationRequest 
     */
    public createClassification(createClassificationRequest: CreateClassificationRequest, _options?: Configuration): Promise<CreateClassificationResponse> {
        const result = this.api.createClassification(createClassificationRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a completion for the provided prompt and parameters
     * @param createCompletionRequest 
     */
    public createCompletion(createCompletionRequest: CreateCompletionRequest, _options?: Configuration): Promise<CreateCompletionResponse> {
        const result = this.api.createCompletion(createCompletionRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new edit for the provided input, instruction, and parameters
     * @param createEditRequest 
     */
    public createEdit(createEditRequest: CreateEditRequest, _options?: Configuration): Promise<CreateEditResponse> {
        const result = this.api.createEdit(createEditRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an embedding vector representing the input text.
     * @param createEmbeddingRequest 
     */
    public createEmbedding(createEmbeddingRequest: CreateEmbeddingRequest, _options?: Configuration): Promise<CreateEmbeddingResponse> {
        const result = this.api.createEmbedding(createEmbeddingRequest, _options);
        return result.toPromise();
    }

    /**
     * Upload a file that contains document(s) to be used across various endpoints/features. Currently, the size of all the files uploaded by one organization can be up to 1 GB. Please contact us if you need to increase the storage limit. 
     * @param file Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.  If the &#x60;purpose&#x60; is set to \\\&quot;fine-tune\\\&quot;, each line is a JSON record with \\\&quot;prompt\\\&quot; and \\\&quot;completion\\\&quot; fields representing your [training examples](/docs/guides/fine-tuning/prepare-training-data). 
     * @param purpose The intended purpose of the uploaded documents.  Use \\\&quot;fine-tune\\\&quot; for [Fine-tuning](/docs/api-reference/fine-tunes). This allows us to validate the format of the uploaded file. 
     */
    public createFile(file: HttpFile, purpose: string, _options?: Configuration): Promise<OpenAIFile> {
        const result = this.api.createFile(file, purpose, _options);
        return result.toPromise();
    }

    /**
     * Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param createFineTuneRequest 
     */
    public createFineTune(createFineTuneRequest: CreateFineTuneRequest, _options?: Configuration): Promise<FineTune> {
        const result = this.api.createFineTune(createFineTuneRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an image given a prompt.
     * @param createImageRequest 
     */
    public createImage(createImageRequest: CreateImageRequest, _options?: Configuration): Promise<ImagesResponse> {
        const result = this.api.createImage(createImageRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an edited or extended image given an original image and a prompt.
     * @param image The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask.
     * @param prompt A text description of the desired image(s). The maximum length is 1000 characters.
     * @param mask An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where &#x60;image&#x60; should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as &#x60;image&#x60;.
     * @param n The number of images to generate. Must be between 1 and 10.
     * @param size The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
     * @param responseFormat The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
     * @param user A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     */
    public createImageEdit(image: HttpFile, prompt: string, mask?: HttpFile, n?: number, size?: string, responseFormat?: string, user?: string, _options?: Configuration): Promise<ImagesResponse> {
        const result = this.api.createImageEdit(image, prompt, mask, n, size, responseFormat, user, _options);
        return result.toPromise();
    }

    /**
     * Creates a variation of a given image.
     * @param image The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
     * @param n The number of images to generate. Must be between 1 and 10.
     * @param size The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;.
     * @param responseFormat The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;.
     * @param user A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
     */
    public createImageVariation(image: HttpFile, n?: number, size?: string, responseFormat?: string, user?: string, _options?: Configuration): Promise<ImagesResponse> {
        const result = this.api.createImageVariation(image, n, size, responseFormat, user, _options);
        return result.toPromise();
    }

    /**
     * Classifies if text violates OpenAI's Content Policy
     * @param createModerationRequest 
     */
    public createModeration(createModerationRequest: CreateModerationRequest, _options?: Configuration): Promise<CreateModerationResponse> {
        const result = this.api.createModeration(createModerationRequest, _options);
        return result.toPromise();
    }

    /**
     * The search endpoint computes similarity scores between provided query and documents. Documents can be passed directly to the API if there are no more than 200 of them.  To go beyond the 200 document limit, documents can be processed offline and then used for efficient retrieval at query time. When `file` is set, the search endpoint searches over all the documents in the given file and returns up to the `max_rerank` number of documents. These documents will be returned along with their search scores.  The similarity score is a positive score that usually ranges from 0 to 300 (but can sometimes go higher), where a score above 200 usually means the document is semantically similar to the query. 
     * @param engineId The ID of the engine to use for this request.  You can select one of &#x60;ada&#x60;, &#x60;babbage&#x60;, &#x60;curie&#x60;, or &#x60;davinci&#x60;.
     * @param createSearchRequest 
     */
    public createSearch(engineId: string, createSearchRequest: CreateSearchRequest, _options?: Configuration): Promise<CreateSearchResponse> {
        const result = this.api.createSearch(engineId, createSearchRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a file.
     * @param fileId The ID of the file to use for this request
     */
    public deleteFile(fileId: string, _options?: Configuration): Promise<DeleteFileResponse> {
        const result = this.api.deleteFile(fileId, _options);
        return result.toPromise();
    }

    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization.
     * @param model The model to delete
     */
    public deleteModel(model: string, _options?: Configuration): Promise<DeleteModelResponse> {
        const result = this.api.deleteModel(model, _options);
        return result.toPromise();
    }

    /**
     * Returns the contents of the specified file
     * @param fileId The ID of the file to use for this request
     */
    public downloadFile(fileId: string, _options?: Configuration): Promise<string> {
        const result = this.api.downloadFile(fileId, _options);
        return result.toPromise();
    }

    /**
     * Lists the currently available (non-finetuned) models, and provides basic information about each one such as the owner and availability.
     */
    public listEngines(_options?: Configuration): Promise<ListEnginesResponse> {
        const result = this.api.listEngines(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of files that belong to the user's organization.
     */
    public listFiles(_options?: Configuration): Promise<ListFilesResponse> {
        const result = this.api.listFiles(_options);
        return result.toPromise();
    }

    /**
     * Get fine-grained status updates for a fine-tune job. 
     * @param fineTuneId The ID of the fine-tune job to get events for. 
     * @param stream Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a &#x60;data: [DONE]&#x60; message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned. 
     */
    public listFineTuneEvents(fineTuneId: string, stream?: boolean, _options?: Configuration): Promise<ListFineTuneEventsResponse> {
        const result = this.api.listFineTuneEvents(fineTuneId, stream, _options);
        return result.toPromise();
    }

    /**
     * List your organization's fine-tuning jobs 
     */
    public listFineTunes(_options?: Configuration): Promise<ListFineTunesResponse> {
        const result = this.api.listFineTunes(_options);
        return result.toPromise();
    }

    /**
     * Lists the currently available models, and provides basic information about each one such as the owner and availability.
     */
    public listModels(_options?: Configuration): Promise<ListModelsResponse> {
        const result = this.api.listModels(_options);
        return result.toPromise();
    }

    /**
     * Retrieves a model instance, providing basic information about it such as the owner and availability.
     * @param engineId The ID of the engine to use for this request 
     */
    public retrieveEngine(engineId: string, _options?: Configuration): Promise<Engine> {
        const result = this.api.retrieveEngine(engineId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a specific file.
     * @param fileId The ID of the file to use for this request
     */
    public retrieveFile(fileId: string, _options?: Configuration): Promise<OpenAIFile> {
        const result = this.api.retrieveFile(fileId, _options);
        return result.toPromise();
    }

    /**
     * Gets info about the fine-tune job.  [Learn more about Fine-tuning](/docs/guides/fine-tuning) 
     * @param fineTuneId The ID of the fine-tune job 
     */
    public retrieveFineTune(fineTuneId: string, _options?: Configuration): Promise<FineTune> {
        const result = this.api.retrieveFineTune(fineTuneId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
     * @param model The ID of the model to use for this request
     */
    public retrieveModel(model: string, _options?: Configuration): Promise<Model> {
        const result = this.api.retrieveModel(model, _options);
        return result.toPromise();
    }


}



