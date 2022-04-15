import { TagNames } from '../Data';
import { User } from '../DiscordTypes';

/** POST request body for sending "make application" requests from web. */
export interface WebApplicationRequest {
    /** Code for the invite, not the full URL. */
    inviteCode: string;

    /**
     * For users this will be their Discord OAuth access token.
     *
     * For bots this will be their UoA Discords API token.
     */
    authToken: string;

    tags: TagNames[];

    /** If true, will not actually add the application. */
    dryRun?: boolean;
}

/** POST request body for sending "make application" requests from bots. */
export interface BotApplicationRequest extends WebApplicationRequest {
    /** The {@link User Discord user} this bot is making the application on behalf of. */
    user: User;
}

/** POST request body for sending "accept application" requests. */
export interface AcceptApplicationRequest {
    access_token: string;
    guildId: string;
}

/** POST request body for sending "reject application" requests. */
export type RejectApplicationRequest = AcceptApplicationRequest;

/** POST request body for sending "modify application" requests. */
export interface ModifyApplicationRequest extends AcceptApplicationRequest {
    tags: TagNames[];
}
