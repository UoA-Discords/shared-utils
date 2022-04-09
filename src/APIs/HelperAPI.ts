import { Invite } from '../DiscordTypes';

export default abstract class HelperAPI {
    /** Invite validation middleware.
     *
     * @param {string} inviteUrl - Invite code (e.g. `abc123`).
     */
    public static verifyGuild(invite: Invite): true | `expires` | `toosmall` {
        if (invite.expires_at !== null) return `expires`;

        if (invite.approximate_member_count < 100) return `toosmall`;

        return true;
    }
}
