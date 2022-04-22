export enum POSTApplicationRoutes {
    ApplyWeb = `/applications/applyWeb`,
    ApplyBot = `/applications/applyBot`,
    Accept = `/applications/accept`,
    Reject = `/applications/reject`,
    Modify = `/applications/modifyTags`,
}

export enum POSTAuthRoutes {
    GetToken = `/auth/getToken`,
    RefreshToken = `/auth/refreshToken`,
    RevokeToken = `/auth/revokeToken`,
}

export enum GETRoutes {
    GetApplications = `/applications`,
    GetServers = `/servers`,
}

export enum POSTServerRoutes {
    Like = `/servers/like`,
    Dislike = `/servers/dislike`,
}

export type CombinedRoutes = POSTApplicationRoutes | POSTAuthRoutes | GETRoutes | POSTServerRoutes;
