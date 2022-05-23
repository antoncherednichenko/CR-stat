import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getId } from "../../helpers"
import { CardI } from "../../types/playerTypes"

interface CreateDeckI {
    deck: CardI[],
    plugs: CardI[],
    chosenCards: CardI[]
}

const initialState: CreateDeckI = {
    deck: [],
    chosenCards: [],
    plugs: [
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' },
        { iconUrls: { medium: 'icon' }, id: getId(), maxLevel: 0, name: 'plug' }
       
    ]
}

const deckCreatorSlice = createSlice({
    name: 'deckCreator',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<CardI>) => {
            
            if(!state.chosenCards.some(e => e.id === action.payload.id)) {
                state.chosenCards.push(action.payload)
            }
            
            if(state.chosenCards.length <= 8) {
                state.deck = [...state.chosenCards, ...state.plugs.slice(state.chosenCards.length)]
            }
        },
        resetDeck: state => {
            state.deck = []
            state.chosenCards = [] 
        }
    }
})

export const { addCard, resetDeck } = deckCreatorSlice.actions
export default deckCreatorSlice.reducer