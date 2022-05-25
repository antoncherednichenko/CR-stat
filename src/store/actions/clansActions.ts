import { createAsyncThunk } from "@reduxjs/toolkit";
import crAPI from "../../api/api";


export const searchClan = createAsyncThunk(
    'clans/searchClan',
    async (clanName: string) => {
        const data = await crAPI.get(`/clans?name=${clanName}`)
            .then(result => {
                if(result.status === 200 && result.data) {
                    return JSON.parse(result.data).items
                }
            })
        return data
    }
)