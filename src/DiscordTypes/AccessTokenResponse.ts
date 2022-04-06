/** {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-response API Reference} */
export default interface AccessTokenResponse {
    access_token: string;
    token_type: `Bearer`;

    /** Seconds until token expiration. */
    expires_in: number;

    refresh_token: string;
    scope: string;
}
