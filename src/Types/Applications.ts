import { TagNames } from '../Data';
import { User } from '../DiscordTypes';

/** POST request body for sending application requests. */
export interface ApplyWebRequest {
    /** Code for the invite, not the full URL. */
    inviteCode: string;

    /**
     * For users this will be their Discord OAuth access token.
     *
     * For bots this will be their UoA Discords API token.
     */
    authToken: string;

    tags: TagNames[];

    /** If false, will not actually add the application. */
    dryRun?: boolean;
}

/** Guild registry applications submitted via a bot must have this in their request body. */
export interface ApplyBotRequest extends ApplyWebRequest {
    /** The user this bot is making the application on behalf of. */
    user: User;
}
