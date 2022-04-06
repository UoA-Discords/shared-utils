import Guild from './Guild';
import User from './User';

/**
 * Invite object.
 *
 * Assumes `with_counts` and `with_expiration` are both `true`.
 *
 * {@link https://discord.com/developers/docs/resources/invite#invite-object API Reference}
 */
export default interface Invite {
    /** The invite code (unique ID), e.g. 'https://discord.gg/abcdefg' has code 'abcdefg'. */
    code: string;

    guild?: Guild;

    channel: {
        id: string;
        name: string;
        /** @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types} */
        type: number;
    } | null;

    inviter?: User;

    target_type: number;

    /** For voice channel stream invites, this user's stream will be displayed. */
    target_user?: User;

    /** Partial application object, irrelevant. */
    target_application?: unknown;

    /** Approximate number of online members. */
    approximate_presence_count: number;

    /** Approximate number of total members. */
    approximate_member_count: number;

    /** ISO6801 timestamp, is `null` if the invite never expires.
     *
     * @example '2022-04-07T03:52:22+00:00'
     */
    expires_at: string | null;
}
