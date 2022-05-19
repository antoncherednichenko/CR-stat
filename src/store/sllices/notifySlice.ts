import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface NotifyI {
    isShow: boolean,
    value: string
}

const initialState: NotifyI = {
    isShow: false,
    value: ''
}

const notifySlice = createSlice({
    name: 'notify',
    initialState,
    reducers: {
        showNotify: (state, action: PayloadAction<string>) => {
            state.value = action.payload
            state.isShow = true
        },
        hideNotify: state => { state.isShow = false }
    }
})

export const { showNotify, hideNotify } = notifySlice.actions
export default notifySlice.reducer