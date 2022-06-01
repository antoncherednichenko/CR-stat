import { createSlice } from "@reduxjs/toolkit"
import { TopPlayerI } from "../../types/playerTypes"
import { getTopPlayers } from "../actions/playerActions"

interface InitialStateI {
    topPlayers: TopPlayerI[],
    isLoading: boolean
}

const initialState: InitialStateI = {
    topPlayers: [],
    isLoading: false
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTopPlayers.pending, state => { state.isLoading = true })
        builder.addCase(getTopPlayers.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.topPlayers = payload
        } )
        builder.addCase(getTopPlayers.rejected, state => { state.isLoading = false })
    }
})

export default homeSlice.reducer