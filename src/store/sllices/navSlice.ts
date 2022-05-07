import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NavLinkType } from "../../types/types"

interface NavInitState {
    links: NavLinkType[]
}

const initialState: NavInitState = {
    links: [
        {
          title: 'Player',
          isActive: false,
          path: '/player',
          id: Date.now() * Math.random()  
        },
        {
            title: 'Clans',
            isActive: false,
            path: '/clans',
            id: Date.now() * Math.random()  
        },
        {
            title: 'Tourmenets',
            isActive: false,
            path: '/tourmenets',
            id: Date.now() * Math.random()  
        },
        {
            title: 'Chalenges',
            isActive: false,
            path: '/chalenges',
            id: Date.now() * Math.random()  
        },
        {
            title: 'Create deck',
            isActive: false,
            path: '/create-deck',
            id: Date.now() * Math.random()  
        },
    ]
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers:{
        toggleLink: (state, action: PayloadAction<number>) => {
            state.links = state.links.map(l => {
                if(l.id === action.payload) {
                    return { ...l, isActive: true }
                }else {
                    return { ...l, isActive: false }
                }
            })
        } 
    }

})

export const { toggleLink } = navSlice.actions
export default navSlice.reducer