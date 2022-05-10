import { CardI } from "./playerTypes"

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
    currentFavouriteCard: CardI,
    expLevel: number,
    losses: number,
    wins: number,
    starPoints: number,
    threeCrownWins: number
}