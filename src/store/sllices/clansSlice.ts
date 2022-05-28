import { createSlice } from "@reduxjs/toolkit"
import { ClansStateI } from "../../types/clanTypes"
import { getClanByTag, searchClan } from "../actions/clansActions"

const initialState: ClansStateI = {
    clansList: [],
    isClansLoading: false,
    isSearchComponent: true,
    clanInfo: null
}

const clansSlice = createSlice({
    name: 'clans',
    initialState,
    reducers: {
        backToSearch: state => { state.isSearchComponent = true },
        startLoading: state => { state.isClansLoading = true }
    },
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
        // GET BY CLAN TAG
        builder.addCase(getClanByTag.pending, state => {
            state.isSearchComponent = false
            state.isClansLoading = true
        })
        builder.addCase(getClanByTag.fulfilled, (state, { payload }) => {
            state.isClansLoading = false
            state.clanInfo = payload
        })
        builder.addCase(getClanByTag.rejected, state => {
            state.isClansLoading = false
            state.isSearchComponent = true
        })
    }
})

export const { backToSearch, startLoading } = clansSlice.actions
export default clansSlice.reducer