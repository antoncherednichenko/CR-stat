import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/types"
import { fetchPlayerInfo } from "../actions/playerActions"

const initialState: PlayerType = {
    player: {}
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {},
    extraReducers: {
        //@ts-ignore
        [fetchPlayerInfo.pending]: (state) => { console.log(state) },
        //@ts-ignore
        [fetchPlayerInfo.fulfilled]: (state, action) => { console.log(action.payload, state) },
        //@ts-ignore
        [fetchPlayerInfo.rejected]: (state) => { console.log(state) } 
    }
})


export default playerSlice