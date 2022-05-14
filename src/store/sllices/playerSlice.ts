import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/playerTypes"
import { fetchAllCards, fetchPlayerInfo, fetchUpcomingChests } from "../actions/playerActions"

const initialState: PlayerType = {
    playerInfo: null,
    isPlayerLoading: false,
    upcomingChests: [],
    isChestsLoading: false,
    allCards: []
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
            state.isChestsLoading = true
        })
        builder.addCase(fetchUpcomingChests.fulfilled, (state, { payload }) => {
            state.upcomingChests = payload
            state.isChestsLoading = false
        })
        builder.addCase(fetchUpcomingChests.rejected, state => {
            state.isChestsLoading = false
        })
        // All cards
        builder.addCase(fetchAllCards.fulfilled, (state, { payload }) => { state.allCards = payload })
    }
})


export default playerSlice.reducer