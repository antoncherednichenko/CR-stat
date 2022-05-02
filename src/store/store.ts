import { combineReducers ,configureStore } from "@reduxjs/toolkit"
import apiSlice from "./sllices/apiSlice"

const rootReducer = combineReducers({
    api: apiSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch