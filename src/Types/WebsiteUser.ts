export default interface WebsiteUser {
    /** Discord user ID. */
    _id: string;
    guildsLiked: string[];
}

export interface AddLikeRequest {
    access_token: string;
    guildId: string;
}

export type RemoveLikeRequest = AddLikeRequest;
