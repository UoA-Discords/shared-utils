import { GuildFeatures, NSFWLevels, VerificationLevels } from './Enums';

/**
 * Partial guild, part of invite object.
 *
 * {@link https://discord.com/developers/docs/resources/guild#guild-object API Reference}
 */
export default interface Guild {
    id: string;

    name: string;

    icon: string | null;

    splash: string | null;

    verification_level: VerificationLevels;

    features: GuildFeatures[];

    description: string | null;

    banner: string | null;

    vanity_url_code: string | null;

    /** Current number of server boosts. */
    premium_subscription_count: number;

    nsfw: boolean;

    nsfw_level: NSFWLevels;
}

/** Guild object returned by `/users/@me/guilds`, but NOT in an invite object. */
export interface PartialGuild {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    permissions: string;
    features: GuildFeatures[];
}
