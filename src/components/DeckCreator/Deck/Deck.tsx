import { FC } from 'react'
import { CardI } from '../../../types/playerTypes'
import Card from './Card/Card'
import style from './Deck.module.scss'

interface DeckProps {
    cards: CardI[]
}

const Deck: FC<DeckProps> = ({ cards }) => {

    return (
        <>
            <div className={style.deck}>
                { cards.map(c => {
                    if(c.name === 'plug') {
                        return (
                            <div key={c.id} className={style.deck_plug}>
                                <img src="https://cdn.royaleapi.com/static/img/ui/128x128/battle.png?t=ee9db8e2c" alt="icon" />
                            </div>
                        )
                    } else {
                        return <Card key={c.id} card={c} />
                    }
                }) }
            </div>
        </>
    )
}

export default Deck