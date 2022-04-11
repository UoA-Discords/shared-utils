import { TagNames } from '../Data';
import { Invite, User } from '../DiscordTypes';

/** Standard registered guild as seen on the frontend. */
export default interface PublicRegisteredGuild {
    guildId: string;
    inviteObject: Invite;
    tags: TagNames[];
    addedVia: `web` | `bot`;
    appliedAt: number;
    addedBy: User;
    approvedBy: User;
    approvedAt: number;
}
