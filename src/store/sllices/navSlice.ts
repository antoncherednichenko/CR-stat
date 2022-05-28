import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getId } from "../../helpers"
import { NavLinkType } from "../../types/types"

interface NavInitState {
    links: NavLinkType[],
    contentOverflow?: string
}

const initialState: NavInitState = {
    contentOverflow: 'auto',
    links: [
        {
            title: 'Home',
            isActive: false,
            path: '/',
            id: getId()
        },
        {
          title: 'Player',
          isActive: false,
          path: '/player',
          id: getId() 
        },
        {
            title: 'Clans',
            isActive: false,
            path: '/clans',
            id: getId() 
        },
        {
            title: 'Tourmenets',
            isActive: false,
            path: '/tourmenets',
            id: getId()  
        },
        {
            title: 'Chalenges',
            isActive: false,
            path: '/chalenges',
            id: getId() 
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
        },
        changeContentOverflow: (state, action: PayloadAction<string>) => { 
            state.contentOverflow = action.payload 
        },
        checkNavMenu: (state, action: PayloadAction<string>) => {
            state.links = state.links.map(l => (
                {
                    ...l,
                    isActive: l.path === action.payload
                }
            ))
        },
        disableAllNavLinks: state => {
            state.links = state.links.map(l => (
                {
                    ...l,
                    isActive: false
                }
            ))
        } 
    }

})

export const { toggleLink, changeContentOverflow, checkNavMenu, disableAllNavLinks } = navSlice.actions
export default navSlice.reducer