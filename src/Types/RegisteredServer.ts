import { TagNames } from '../Data';
import { User } from '../DiscordTypes';

export default interface RegisteredServer {
    inviteCode: string;
    tags: TagNames[];
    appliedAt: number;
    addedBy: User;
    approvedBy: User;
    approvedAt: number;

    bot: User | null;

    /**
     * Array of server member count over the last 30 days,
     * with the first number being the oldest.
     *
     * Will not necessarily be length 30, since only starts tracking from
     * when the server was registered to the UoA Discords website.
     */
    memberCountHistory: number[];
}
