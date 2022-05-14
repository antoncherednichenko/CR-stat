import { FC } from 'react'
import { CardI } from '../../../types/playerTypes'
import GameCard from '../../../ui/GameCard/GameCard'
import style from './CurrentDeck.module.scss'

interface CurrentDeckProps {
    deck: CardI[],
    favoriteCard: CardI
}

const CurrentDeck: FC<CurrentDeckProps> = ({ deck, favoriteCard }) => {

    return (
        <>
            <div className={style.deck}>
                <h2 className={style.deck_title}>Current deck</h2>
                <div className={style.container}>
                    <div className={style.deck_holder}>
                        { deck.map(c => {
                            if(c.id === favoriteCard.id) {
                                return <GameCard favorite key={c.id} card={c}/>
                            } else {
                                return <GameCard key={c.id} card={c}/>
                            }
                        }) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentDeck