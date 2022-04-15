import { VerificationLevels } from '../DiscordTypes';

export default abstract class GuildRequirements {
    /** Servers with less than this many members are not eligible to be registered. */
    public static readonly minMemberCount: number = 100;

    /** Servers with verification levels lower than this should display a warning when creating applications. */
    public static readonly verificationWarnBelow: VerificationLevels = VerificationLevels.LOW;
}
