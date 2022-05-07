import { combineReducers ,configureStore } from "@reduxjs/toolkit"
import navSlice from "./sllices/navSlice"
// import playerSlice from "./sllices/playerSlice"

const rootReducer = combineReducers({
    nav: navSlice,
    // player: playerSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch