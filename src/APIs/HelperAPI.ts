import DiscordAPI from './DiscordAPI';

type VerifyInviteResponse = `noGuild` | `hasExpiry` | `tooSmall`;

export default abstract class HelperAPI {
    /** Invite validation middleware.
     *
     * @param {string} inviteUrl - Invite code (e.g. `abc123`).
     */
    public static async verifyInvite(inviteUrl: string): Promise<true | VerifyInviteResponse> {
        const invite = await DiscordAPI.getInviteData(inviteUrl);
        if (!invite.success) return `noGuild`;

        if (invite.data.expires_at !== null) return `hasExpiry`;

        if (invite.data.approximate_member_count < 100) return `tooSmall`;

        return true;
    }
}
