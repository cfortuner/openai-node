import {HttpLibrary, RequestContext, ResponseContext} from './http.js';
import { from, Observable } from '../rxjsStub.js';
import createFetch, { RequestInfo, RequestInit } from '@fortaine/fetch';

export class IsomorphicFetchHttpLibrary implements HttpLibrary {
    static fetch(...args: [RequestInfo, RequestInit]) {
      const fetcher = (createFetch as any)();

      return fetcher(...args);
    }

    public send(request: RequestContext): Observable<ResponseContext> {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();

        const resultPromise = IsomorphicFetchHttpLibrary.fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: request.getHeaders(),
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
              headers[name] = value;
            });

            const body = {
              text: () => resp.text(),
              binary: () => resp.buffer(),
              stream: () => resp.body
            };
            return new ResponseContext(resp.status, headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
