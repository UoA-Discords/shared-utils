import { TagNames } from '../Data';
import { User } from '../DiscordTypes';

/** Guild registry applications submitted via the website must have this in their request body. */
export interface WebApplication {
    inviteCode: string;
    access_token: string;
    tags: TagNames[];
}

/** Guild registry applications submitted via a bot must have this in their request body. */
export interface BotApplication {
    /** Discord ID Snowflake for the bot. */
    botId: string;

    /** The bot's API token to the API (NOT the Discord API). */
    api_token: string;

    /** The user this bot is making the application on behalf of. */
    user: User;

    inviteCode: string;

    tags: TagNames[];
}
