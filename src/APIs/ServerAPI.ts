import axios, { AxiosError, AxiosInstance } from 'axios';
import { AccessTokenResponse } from '../DiscordTypes';
import APIResponse from '../Types/APIResponse';

export default class ServerAPI {
    private readonly _server: AxiosInstance;

    public constructor(serverURL: string) {
        this._server = axios.create({
            baseURL: serverURL,
            headers: {
                'Content-Type': `application/json`,
                'Access-Control-Allow-Origin': `*`,
            },
        });
    }

    /** Upgrades an OAuth code to a Discord access token. */
    public async getToken(code: string): Promise<APIResponse<AccessTokenResponse>> {
        try {
            const { status, statusText, data } = await this._server.post<AccessTokenResponse>(`/auth/getToken`, {
                code,
                redirect_uri: window.location.origin,
            });

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to get token with messge: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error as Error as AxiosError,
            };
        }
    }

    public async refreshToken(refresh_token: string): Promise<APIResponse<AccessTokenResponse>> {
        try {
            const { status, statusText, data } = await this._server.post<AccessTokenResponse>(`/auth/refreshToken`, {
                refresh_token,
            });

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to refresh token with messge: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error as Error as AxiosError,
            };
        }
    }

    public async revokeToken(token: string): Promise<APIResponse<boolean>> {
        try {
            const { status, statusText, data } = await this._server.post<boolean>(`/auth/revokeToken`, {
                token,
            });

            if (status !== 200) {
                console.warn(`Got status code ${status} trying to revoke token with messge: ${statusText}`, data);
            }

            return { success: true, data };
        } catch (error) {
            return { success: false, error: error as Error as AxiosError };
        }
    }
}
