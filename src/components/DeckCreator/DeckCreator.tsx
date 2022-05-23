import { FC } from 'react'
import { useTypedSelector } from '../../hooks/hooks'
import Cards from './Cards/Cards'
import Deck from './Deck/Deck'
import style from './DeckCreator.module.scss'

const DeckCreator: FC = () => {

    const { deck, plugs } = useTypedSelector(state => state.deckCreator)
    const { allCards } = useTypedSelector(state => state.player)
    console.log(allCards)

    return (
        <>
            <div className={style.creator}>
                <div className="container">
                    <Deck cards={deck.length ? deck : plugs} />
                    <Cards cards={allCards} />
                </div>
            </div>
        </>
    )
}

export default DeckCreator