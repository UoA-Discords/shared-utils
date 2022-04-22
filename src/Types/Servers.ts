export interface LikeServerRequest {
    action: `like` | `removeLike`;
    access_token: string;
    guildId: string;
}
