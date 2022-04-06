/** {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level Verification level} for a guild. */
export enum VerificationLevels {
    /** Unrestricted. */
    NONE,

    /** Must have a verified email on account. */
    LOW,

    /** Must be registered on Discord for longer than 5 minutes. */
    MEDIUM,

    /** Must be a member of the server for longer than 10 minutes. */
    HIGH,

    /** Must have a verified phone number. */
    VERY_HIGH,
}

/** {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level NSFW level} for a guild. */
export enum NSFWLevels {
    DEFAULT,
    EXPLICIT,
    SAFE,
    AGE_RESTRICED,
}

/** {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-features features} of a guild. */
export enum GuildFeatures {
    /** Guild has access to set an animated guild banner image. */
    ANIMATED_BANNER = `ANIMATED_BANNER`,

    /** Guild has access to set an animated guild icon. */
    ANIMATED_ICON = `ANIMATED_ICON`,

    /** Guild has access to set a guild banner image. */
    BANNER = `BANNER`,

    /** Guild has access to use commerce features (i.e. create store channels). */
    COMMERCE = `COMMERCE`,

    /** Guild can enable welcome screen, Membership Screening,
     * stage channels and discovery, and receives community updates. */
    COMMUNITY = `COMMUNITY`,

    /** Guild is able to be discovered in the directory. */
    DISCOVERABLE = `DISCOVERABLE`,

    /** Guild is able to be featured in the directory. */
    FEATURABLE = `FEATURABLE`,

    /** Guild has access to set an invite splash background. */
    INVITE_SPLASH = `INVITE_SPLASH`,

    /** Guild has enabled Membership Screening. */
    MEMBER_VERIFICATION_GATE_ENABLED = `MEMBER_VERIFICATION_GATE_ENABLED`,

    /** Guild has enabled monetization. */
    MONETIZATION_ENABLED = `MONETIZATION_ENABLED`,

    /** Guild has increased custom sticker slots. */
    MORE_STICKERS = `MORE_STICKERS`,

    /** Guild has access to create news channels. */
    NEWS = `NEWS`,

    /** Guild is partnered. */
    PARTNERED = `PARTNERED`,

    /** Guild can be previewed before joining via Membership Screening or the directory. */
    PREVIEW_ENABLED = `PREVIEW_ENABLED`,

    /** Guild has access to create private threads. */
    PRIVATE_THREADS = `PRIVATE_THREADS`,

    /** Guild is able to set role icons. */
    ROLE_ICONS = `ROLE_ICONS`,

    /** Guild has access to the seven day archive time for threads. */
    SEVEN_DAY_THREAD_ARCHIVE = `SEVEN_DAY_THREAD_ARCHIVE`,

    /** Guild has access to the three day archive time for threads. */
    THREE_DAY_THREAD_ARCHIVE = `THREE_DAY_THREAD_ARCHIVE`,

    /** Guild has enabled ticketed events. */
    TICKETED_EVENTS_ENABLED = `TICKETED_EVENTS_ENABLED`,

    /** Guild has access to set a vanity URL. */
    VANITY_URL = `VANITY_URL`,

    /** Guild is verified. */
    VERIFIED = `VERIFIED`,

    /** Guild has access to set 384kbps bitrate in voice (previously VIP voice servers). */
    VIP_REGIONS = `VIP_REGIONS`,

    /** Guild has enabled the welcome screen. */
    WELCOME_SCREEN_ENABLED = `WELCOME_SCREEN_ENABLED`,
}
