import { FC } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/hooks'
import Cards from './Cards/Cards'
import Deck from './Deck/Deck'
import style from './DeckCreator.module.scss'
import { FiTrash2, FiPackage, FiCopy } from 'react-icons/fi'
import { getRandomDeck, resetDeck } from '../../store/sllices/deckCreatorSlice'
import { hideNotify, showNotify } from '../../store/sllices/notifySlice'

const DeckCreator: FC = () => {

    const dispatch = useTypedDispatch()
    const { deck, plugs } = useTypedSelector(state => state.deckCreator)
    const { allCards } = useTypedSelector(state => state.player)

    const clearDeck = () => { dispatch(resetDeck()) }
    const generateRandomDeck = () => { dispatch(getRandomDeck(allCards)) }
    const copyDeck = () => {
        if(deck.length === 8) {
            const link = document.createElement('a')
            const src = `https://link.clashroyale.com/deck/en?deck=${deck.map(c => c.id).join(';')}`
            link.href = src
            link.target = '_blank'
            document.body.appendChild(link)
            link.click()
            link.remove()
        } else {
            dispatch(showNotify('There must be 8 cards in the deck'))
            setTimeout(() => { dispatch(hideNotify()) }, 3000)
        }
    }

    return (
        <>
            <div className={style.creator}>
                <div className="container">
                    <Deck cards={deck.length ? deck : plugs} />
                    <div className={style.creator_btns}>
                        <div className={style.holder}>
                            <button onClick={clearDeck} className={style.creator_button}><FiTrash2 /></button>
                            <button onClick={generateRandomDeck} className={style.creator_button}><FiPackage /></button>
                            <button onClick={copyDeck} className={style.creator_button}><FiCopy /></button>
                        </div>
                    </div>
                    <Cards cards={allCards} />
                </div>
            </div>
        </>
    )
}

export default DeckCreator