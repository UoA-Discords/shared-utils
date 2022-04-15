/** POST request body for sending "get token" requests. */
export interface GetTokenRequest {
    code: string;
    redirect_uri: string;
}

/** POST request body for sending "refresh token" requests. */
export interface RefreshTokenRequest {
    refresh_token: string;
}

/** POST request body for sending "revoke token" requests. */
export interface RevokeTokenRequest {
    token: string;
}
