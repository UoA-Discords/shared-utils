/**
 * {@link User} object given to client by server.
 *
 * Excludes information like:
 * - ID
 * - Discriminator
 */
export interface AnonymousUser {
    /** E.g. 'NachoToast'. */
    username: string;

    /** Avatar hash. */
    avatar: string;

    /** @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags} */
    public_flags: number;
}

/**
 * Discord user
 *
 * {@link https://discord.com/developers/docs/resources/user#user-object API Reference}
 */
export interface User extends AnonymousUser {
    id: string;

    /** E.g. '1234' */
    discriminator: string;
}
