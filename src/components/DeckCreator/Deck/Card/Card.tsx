import { FC } from 'react'
import { CardI } from '../../../../types/playerTypes'
import style from './Card.module.scss'

interface CardProps {
    card: CardI
}

const Card: FC<CardProps> = ({ card }) => {

    return (
        <>
        <div style={{ backgroundImage: `url(${card.iconUrls.medium})` }} className={style.card}>
            <h3 className={style.card_title}>{card.name}</h3>
        </div>
        </>
    )
}

export default Card