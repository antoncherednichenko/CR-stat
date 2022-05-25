
export interface LocationI {
    id: number,
    name: string,
    isCountry: boolean
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

export interface ClansStateI {
    clansList: ClanI[]
    isClansLoading: boolean
}