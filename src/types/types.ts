import { ArenaI, CardI, ClanI } from "./playerTypes"

export interface NavLinkType {
    isActive: boolean,
    path: string,
    title: string,
    id: number
}

export interface TabType {
    isActive: boolean,
    title: string,
    id: number
}

export interface MainInfoProps {
    name: string,
    tag: string,
    trophies: number,
    battleCount: number,
    bestTrophies: number,
    expLevel: number,
    losses: number,
    wins: number,
    starPoints: number,
    threeCrownWins: number,
    clan: ClanI,
    role: string,
    arena: ArenaI
}