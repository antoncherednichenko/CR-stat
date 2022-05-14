import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
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