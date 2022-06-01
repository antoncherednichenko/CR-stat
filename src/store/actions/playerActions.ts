import { createAsyncThunk } from "@reduxjs/toolkit";
import crAPI from "../../api/api";

export const fetchPlayerInfo = createAsyncThunk(
    'player/fetchPlayerInfo',
    async (tag: string) => {
        const result = await crAPI.get(`/players?tag=${tag}`)
            .then(result => {
                return JSON.parse(result.data)
            }).catch(err => {
                console.error(err.message)
            })
        return result
    }
)

export const fetchUpcomingChests = createAsyncThunk(
    'player/fetchUpcomingChests',
    async (tag: string) => {
        const result = await crAPI.get(`/players/upcomingchests?tag=${tag}`)
            .then(result => {
                return JSON.parse(result.data)
            }).catch(err => {
                console.error(err.message)
            })
        return result.items
    }
)

export const fetchAllCards = createAsyncThunk(
    'player/fetchAllCards',
    async () => {
        const result = await crAPI.get('/cards')
            .then(result => {
                return JSON.parse(result.data)
            }).catch(err => {
                console.error(err.message)
            })
        return result.items
    }
)

export const fetchBattleLog = createAsyncThunk(
    'player/fetchBattleLog',
    async (tag: string) => {
        const result = await crAPI.get(`/players/battlelog?tag=${tag}`)
            .then(result => {
                return JSON.parse(result.data)
            }).catch(err => {
                console.error(err.message)
            })
        return result
    }
)

export const getTopPlayers = createAsyncThunk(
    'home/getTopPlayers',
    async () => {
        const response = await crAPI.get('players/top')
            .then(result => {
                return JSON.parse(result.data).items
            }).catch(err => { console.error(err.message) })
        return response
    }
)