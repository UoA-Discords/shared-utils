import { TagNames } from '../Data';
import { User } from '../DiscordTypes';

export default interface RegisteredServer {
    inviteCode: string;
    tags: TagNames[];
    addedVia: `web` | `bot`;
    appliedAt: number;
    addedBy: User;
    approvedBy: User;
    approvedAt: number;
}
