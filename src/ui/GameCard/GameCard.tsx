import { FC } from 'react'
import { CardI } from '../../types/playerTypes'
import style from './GameCard.module.scss'

interface GameCardProps {
    card: CardI
}

const GameCard: FC<GameCardProps> = ({ card }) => {

    return (
        <>
            <div className={style.card}>
                <img className={style.card_img} src={card.iconUrls.medium} alt={`${card.name} card icon`} />
                <h3 className={style.card_title}>{card.name}</h3>
            </div>
        </>
    )
}

export default GameCard