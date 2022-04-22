export interface LikeServerRequest {
    access_token: string;
    guildId: string;
}

export type DislikeServerRequest = LikeServerRequest;
