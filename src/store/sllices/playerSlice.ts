import { createSlice } from "@reduxjs/toolkit"
import { PlayerType } from "../../types/types"

const initialState: PlayerType = {}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {}
})


export default playerSlice