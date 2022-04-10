import { AnonymousInvite, AnonymousUser, User } from '../DiscordTypes';
import Tag from './Tag';

/**
 * Standard registered guild as seen on the frontend.
 *
 * Backend should not use anonymous data.
 */
export interface RegisteredGuild {
    guildId: string;
    inviteObject: AnonymousInvite;
    tags: Tag[];
    addedVia: `web` | `bot`;
    appliedAt: number;
    addedBy: AnonymousUser;
    approvedBy: AnonymousUser;
    approvedAt: number;
}

/** Guild registry applications submitted via the website must have this in their request body. */
export interface WebApplicationBody {
    inviteURL: string;
    access_token: string;
    tags: Tag[];
}

/** Guild registry applications submitted via a bot must have this in their request body. */
export interface BotApplicationBody {
    /** Discord ID Snowflake for the bot. */
    botId: string;

    /** The bot's API token to the API (NOT the Discord API). */
    api_token: string;

    /** The user this bot is making the application on behalf of. */
    user: User;

    inviteURL: string;

    tags: Tag[];
}
