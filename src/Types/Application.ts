import { AnonymousInvite, AnonymousUser, User } from '../DiscordTypes';
import Tag from './Tag';

export interface RegisteredGuild {
    guildId: string;
    addedVia: `web` | `bot`;
    appliedAt: number;
    inviteObject: AnonymousInvite;
    tags: Tag[];
    addedBy: AnonymousUser;
    approvedBy: AnonymousUser;
    approvedAt: number;
}

export interface WebApplicationBody {
    inviteURL: string;
    access_token: string;
    tags: Tag[];
}

export interface BotApplicationBody {
    botId: string;
    api_token: string;
    user: User;
    // TBC...
}
