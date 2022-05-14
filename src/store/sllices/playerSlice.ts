import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/playerTypes"
import { fetchPlayerInfo, fetchUpcomingChests } from "../actions/playerActions"

const initialState: PlayerType = {
    playerInfo: null,
    isPlayerLoading: false,
    upcomingChests: [],
    isChestLoading: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // Player
        builder.addCase(fetchPlayerInfo.pending, state => {
            state.isPlayerLoading = true
        })
        builder.addCase(fetchPlayerInfo.fulfilled, (state, { payload }) => {
            state.playerInfo = payload
            state.isPlayerLoading = false
        })
        builder.addCase(fetchPlayerInfo.rejected, state => {
            state.isPlayerLoading = false
        })
        // Chests
        builder.addCase(fetchUpcomingChests.pending, state => {
            state.isChestLoading = true
        })
        builder.addCase(fetchUpcomingChests.fulfilled, (state, { payload }) => {
            state.upcomingChests = payload
            state.isChestLoading = false
        })
        builder.addCase(fetchUpcomingChests.rejected, state => {
            state.isChestLoading = false
        })
    }
})


export default playerSlice.reducer