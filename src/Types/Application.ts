import { TagNames } from '../Data';
import { AnonymousInvite, AnonymousUser, User } from '../DiscordTypes';

/**
 * Standard registered guild as seen on the frontend.
 *
 * Backend should not use anonymous data.
 */
export interface RegisteredGuild {
    /** Guild ID. */
    _id: string;
    inviteObject: AnonymousInvite;
    tags: TagNames[];
    addedVia: `web` | `bot`;
    appliedAt: number;
    addedBy: AnonymousUser;
    approvedBy: AnonymousUser;
    approvedAt: number;
}

/** Guild registry applications submitted via the website must have this in their request body. */
export interface WebApplicationBody {
    inviteCode: string;
    access_token: string;
    tags: TagNames[];
}

/** Guild registry applications submitted via a bot must have this in their request body. */
export interface BotApplicationBody {
    /** Discord ID Snowflake for the bot. */
    botId: string;

    /** The bot's API token to the API (NOT the Discord API). */
    api_token: string;

    /** The user this bot is making the application on behalf of. */
    user: User;

    inviteCode: string;

    tags: TagNames[];
}
