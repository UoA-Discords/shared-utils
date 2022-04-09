import { ApplicationResponses } from '../Types';
import DiscordAPI from './DiscordAPI';

type VerifyInviteResponse = ApplicationResponses.Expires | ApplicationResponses.TooSmall | ApplicationResponses.Invalid;

export default abstract class HelperAPI {
    /** Invite validation middleware.
     *
     * @param {string} inviteUrl - Invite code (e.g. `abc123`).
     */
    public static async verifyInvite(inviteUrl: string): Promise<true | VerifyInviteResponse> {
        const invite = await DiscordAPI.getInviteData(inviteUrl);
        if (!invite.success) return ApplicationResponses.Invalid;

        if (invite.data.expires_at !== null) return ApplicationResponses.Expires;

        if (invite.data.approximate_member_count < 100) return ApplicationResponses.TooSmall;

        return true;
    }
}
