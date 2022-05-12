import { FC } from 'react'
import { CardI } from '../../../types/playerTypes'
import GameCard from '../../../ui/GameCard/GameCard'
import style from './CurrentDeck.module.scss'

interface CurrentDeckProps {
    deck: CardI[]
}

const CurrentDeck: FC<CurrentDeckProps> = ({ deck }) => {

    return (
        <>
            <div className={style.deck}>
                <div className={style.container}>
                    <div className={style.deck_holder}>
                        { deck.map(c => (
                            <GameCard key={c.id} card={c}/>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentDeck