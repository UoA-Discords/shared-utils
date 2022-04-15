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

/**
 * An object returned by a API request to the UoA Discords API.
 *
 * A successful response has a `data` field, while an unsuccessful one
 * has an `error` field.
 */
type APIResponse<T> = SuccessfulResponse<T> | FailedResponse;

export default APIResponse;
