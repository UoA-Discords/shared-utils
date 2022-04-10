import { Invite } from '../DiscordTypes';

export default abstract class HelperAPI {
    /** Guilds with member counts lower than this should not be registered. */
    public static readonly MIN_ACCEPTABLE_MEMBERS: number = 100;

    /** Invite validation middleware. */
    public static verifyGuild(inviteCode: Invite): true | `expires` | `toosmall` {
        if (inviteCode.expires_at !== null) return `expires`;

        if (inviteCode.approximate_member_count < HelperAPI.MIN_ACCEPTABLE_MEMBERS) return `toosmall`;

        return true;
    }
}
