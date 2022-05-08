import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import crAPI from "../../api/api";
import { AxiosResponse } from "axios";

//@ts-ignore
export const fetchPlayerInfo:  AsyncThunk<AxiosResponse<any, any>, void, {}> = createAsyncThunk(
    'player/fetchPlayerInfo',
    async function() {
        crAPI.get('').then(result => {
            console.log(result)
        })
    }
)