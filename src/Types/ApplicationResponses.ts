/**
 * Responses from guild registering applications.
 *
 * These can be used both client and server-side.
 */
enum ApplicationResponses {
    /** No invite URL was specified. */
    Unentered,

    /** The invite URL provided was syntactically invalid. */
    Invalid,

    /** The user is not in this guild. */
    NotIn,

    /** This guild does not have enough members. */
    TooSmall,

    /** The invite has an expiry date. */
    Expires,

    /** This guild already exists in the registry. */
    AlreadyRegistered,

    /** This guild has been blacklisted from the registry. */
    Blacklisted,

    /** This guild has chosen to opt-out of the registry. */
    OptOut,

    /** Verified invite and guild meets all conditions for application. */
    Ok,
}

export default ApplicationResponses;
