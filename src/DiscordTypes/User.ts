/**
 * Discord user.
 *
 * {@link https://discord.com/developers/docs/resources/user#user-object API Reference}
 */
export default interface User {
    id: string;

    /** E.g. '1234' */
    discriminator: string;

    /** E.g. 'NachoToast'. */
    username: string;

    /** Avatar hash. */
    avatar: string | null;

    /** @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags} */
    public_flags: number;
}
