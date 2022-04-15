import { VerificationLevels } from '../DiscordTypes';

const GuildRequirements = {
    /** Servers with less than this many members are not eligible to be registered. */
    minMemberCount: 100,

    /** Servers with verification levels lower than this should display a warning when creating applications. */
    verificationWarnBelow: VerificationLevels.LOW,
};

export default GuildRequirements;
