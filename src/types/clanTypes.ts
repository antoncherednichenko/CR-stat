
export interface LocationI {
    id: number,
    name: string,
    isCountry: boolean,
    countryCode?: string
}

export interface ClanI {
    tag: string,
    name: string,
    type: string,
    badgeId: number,
    clanScore: number,
    clanWarTrophies: number,
    location: LocationI,
    requiredTrophies: number,
    donationsPerWeek: number,
    clanChestLevel: number,
    clanChestMaxLevel: number,
    members: number
}

export interface MemberI {
    tag: string,
    name: string,
    role: string,
    lastSeen: string,
    expLevel: number,
    trophies: number,
    arena: { [key: string]: string | number },
    clanRank: number,
    previousClanRank: number,
    donations: number,
    donationsReceived: number,
    clanChestPoints: number

}

export interface ClanInfoI {
    tag: string,
    name: string,
    type: string,
    description: string,
    badgeId: number,
    clanScore: number,
    clanWarTrophies: number,
    location: LocationI,
    requiredTrophies: number,
    donationsPerWeek: number,
    clanChestStatus: string,
    clanChestLevel: number,
    clanChestMaxLevel: number,
    members: number,
    memberList: MemberI[]
}

export interface ClansStateI {
    clansList: ClanI[]
    isClansLoading: boolean,
    isSearchComponent: boolean,
    clanInfo: ClanInfoI | null
}