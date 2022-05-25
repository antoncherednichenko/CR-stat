import { createSlice } from "@reduxjs/toolkit"
import { ClansStateI } from "../../types/clanTypes"
import { searchClan } from "../actions/clansActions"

const initialState: ClansStateI = {
    clansList: [],
    isClansLoading: false
}

const clansSlice = createSlice({
    name: 'clans',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(searchClan.pending, state => {
            state.isClansLoading = true
        })
        builder.addCase(searchClan.fulfilled, (state, { payload }) => {
            state.clansList = payload
            state.isClansLoading = false
        })
        builder.addCase(searchClan.rejected, state => {
            state.isClansLoading = false
        })
    }
})

export default clansSlice.reducer