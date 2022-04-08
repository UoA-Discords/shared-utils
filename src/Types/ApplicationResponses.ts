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

    /** Verified invite, but the user is not an admin in this guild. */
    NotAdmin,

    /** Verified invite, but this guild already exists in the registry. */
    AlreadyRegistered,

    /** Verified invite, but this guild has been blacklisted from the registry. */
    Blacklisted,

    /** Verified invite, but this guild has chosen to opt-out of the registry. */
    OptOut,

    /** Verified invite and guild meets all conditions for application. */
    Ok,
}

export default ApplicationResponses;
