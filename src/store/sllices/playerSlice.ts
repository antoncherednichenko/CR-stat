import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/playerTypes"
import { fetchPlayerInfo } from "../actions/playerActions"

const initialState: PlayerType = {
    playerInfo: null,
    isPlayerLoading: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPlayerInfo.pending, state => {
            state.isPlayerLoading = true
        })
        builder.addCase(fetchPlayerInfo.fulfilled, (state, action) => {
            state.playerInfo = action.payload
            state.isPlayerLoading = false
        })
        builder.addCase(fetchPlayerInfo.rejected, state => {
            state.isPlayerLoading = false
        })
    }
})


export default playerSlice.reducer