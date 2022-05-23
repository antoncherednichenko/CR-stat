import { FC } from 'react'
import { CardI } from '../../../../types/playerTypes'
import style from './Card.module.scss'

interface CardProps {
    card: CardI
}

const Card: FC<CardProps> = ({ card }) => {

    return (
        <>
            <img className={style.card} src={card.iconUrls.medium} alt={card.name} />
        </>
    )
}

export default Card