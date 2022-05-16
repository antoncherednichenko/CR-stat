
export interface AchievementType {
    completionInfo: string | null,
    info: string,
    name: string,
    stars: number,
    target: number,
    value: number
}

export interface ArenaI {
    id: number,
    name: string
}

export interface BadgeI {
    iconUrls: { [key: string]:string },
    level: number,
    maxLevel: number,
    name: string,
    progress: number,
    target: number
}

export interface CardI {
    count?: number,
    iconUrls: { [key: string]:string },
    id: number,
    level?: number,
    maxLevel: number,
    name: string,
    starLevel?: number
}

export interface ClanI {
    badgeId: number,
    name: string,
    tag: string
}

export interface SeasonI {
    bestTrophies?: number,
    trophies: number,
    id?: string

}

export interface PlayerInfoI {
    achievements: AchievementType[],
    arena: ArenaI,
    badges: BadgeI[],
    battleCount: number,
    bestTrophies: number,
    cards: CardI[],
    challengeCardsWon: number,
    challengeMaxWins: number,
    clan: ClanI,
    clanCardsCollected: number,
    currentDeck: CardI[],
    currentFavouriteCard: CardI,
    donations: number,
    donationsReceived: number,
    expLevel: number,
    expPoints: number,
    leagueStatistics: { [key: string]: SeasonI },
    losses: number,
    name: string,
    role: string,
    starPoints: number,
    tag: string,
    threeCrownWins: number,
    totalDonations: number,
    tournamentBattleCount: number,
    tournamentCardsWon: number,
    trophies: number,
    warDayWins: number,
    wins: number
}

export interface ChestI {
    index: number,
    name: string
}

export interface OpponentI {
    tag: string,
    name: string,
    startingTrophies: number,
    crowns: number,
    kingTowerHitPoints: number,
    princessTowersHitPoints: number[],
    clan: ClanI,
    cards: CardI[]
}

export interface BattleI {
    type: string,
    battleTime: string,
    challengeId: number,
    isLadderTournament: boolean,
    arena: ArenaI,
    gameMode: ArenaI,
    challengeWinCountBefore?: number,
    deckSelection: string,
    team: OpponentI[]
}

export interface PlayerType {
    playerInfo: PlayerInfoI | null,
    isPlayerLoading: boolean,
    upcomingChests: ChestI[],
    isChestsLoading: boolean,
    allCards: CardI[],
    isBattleLogLoading: boolean,
    battleLog: BattleI[]
}