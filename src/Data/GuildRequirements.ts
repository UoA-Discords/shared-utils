import { VerificationLevels } from '../DiscordTypes';

export default abstract class GuildRequirements {
    /** Servers with less than this many members are not eligible to be registered. */
    public static readonly minMemberCount: number = 100;

    /** Servers with verification levels lower than this should display a warning when creating applications. */
    public static readonly verificationWarnBelow: VerificationLevels = VerificationLevels.LOW;

    public static getServerSize(memberCount: number): `small` | `medium` | `large` {
        if (memberCount < 200) return `small`;
        if (memberCount < 500) return `medium`;
        return `large`;
    }
}
