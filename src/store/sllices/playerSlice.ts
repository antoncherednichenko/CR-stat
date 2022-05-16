import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/playerTypes"
import { fetchAllCards, fetchBattleLog, fetchPlayerInfo, fetchUpcomingChests } from "../actions/playerActions"

const initialState: PlayerType = {
    playerInfo: null,
    isPlayerLoading: false,
    upcomingChests: [],
    isChestsLoading: false,
    allCards: [],
    isBattleLogLoading: false,
    battleLog: []
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
        // Battlelog
        builder.addCase(fetchBattleLog.pending, state => {
            state.isBattleLogLoading = true
        })
        builder.addCase(fetchBattleLog.fulfilled, (state, { payload }) => {
            state.battleLog = payload
            state.isBattleLogLoading = false
        })
        builder.addCase(fetchBattleLog.rejected, state => {
            state.isBattleLogLoading = false
        })
    }
})


export default playerSlice.reducer