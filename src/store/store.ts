import { combineReducers ,configureStore } from "@reduxjs/toolkit"
import navSlice from "./sllices/navSlice"

const rootReducer = combineReducers({
    nav: navSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch