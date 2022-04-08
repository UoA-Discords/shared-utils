import DiscordAPI from './DiscordAPI';

export default abstract class HelperAPI {
    /** Invite validation middleware.
     *
     * @param {string} inviteUrl - Invite code (e.g. `abc123`).
     */
    public static async verifyInvite(inviteUrl: string): Promise<true | string> {
        const invite = await DiscordAPI.getInviteData(inviteUrl);
        if (!invite.success) return `noGuild`;

        if (invite.data.expires_at !== null) return `expires`;

        if (invite.data.approximate_member_count < 100) return `smol`;

        return true;
    }
}
