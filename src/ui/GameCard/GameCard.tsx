import { FC } from 'react'
import { CardI } from '../../types/playerTypes'
import style from './GameCard.module.scss'

interface GameCardProps {
    card: CardI,
    favorite?: boolean
}

const GameCard: FC<GameCardProps> = ({ card, favorite = false }) => {
    const cardClass = favorite ? [style.card_img, style.favorite] : [style.card_img]
    const title = favorite ? 'Carrent favorite card' : ''
    return (
        <>
            <div title={title} className={style.card}>
                <img className={cardClass.join(' ')} src={card.iconUrls.medium} alt={`${card.name} card icon`} />
                <h3 className={style.card_title}>{card.name}</h3>
            </div>
        </>
    )
}

export default GameCard