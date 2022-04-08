import { AxiosError } from 'axios';

interface BaseResponse {
    success: boolean;
}

interface SuccessfulResponse<T> extends BaseResponse {
    success: true;
    data: T;
}

interface FailedResponse extends BaseResponse {
    success: false;
    error: AxiosError;
}

/** An object returned by an API request.
 *
 * A successful response has a `data` field, while an unsuccessful one
 * has an `error` field. These requests should never throw an error.
 */
type APIResponse<T> = SuccessfulResponse<T> | FailedResponse;

export default APIResponse;
