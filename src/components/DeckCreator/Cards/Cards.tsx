import { FC } from 'react'
import { useTypedDispatch } from '../../../hooks/hooks'
import { addCard } from '../../../store/sllices/deckCreatorSlice'
import { CardI } from '../../../types/playerTypes'
import style from './Cards.module.scss'

interface CardsProps {
    cards: CardI[]
}

const Cards: FC<CardsProps> = ({ cards }) => {

    const dispatch = useTypedDispatch()
    const choseCard = (card: CardI) => {
        dispatch(addCard(card))
    }

    return (
        <>
            <div className={style.cards}>
                { cards.map(c => (
                    <button key={c.id + Math.random()} onClick={() => choseCard(c)}>
                        <img src={c.iconUrls.medium} alt={c.name} />
                    </button>
                )) }
            </div>
        </>
    )
}

export default Cards