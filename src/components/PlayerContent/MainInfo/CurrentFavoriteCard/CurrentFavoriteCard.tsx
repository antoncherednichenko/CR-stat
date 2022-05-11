import { FC } from 'react'
import style from './CurrerntFovoriteCard.module.scss'

interface CurrentFavoriteCardProps {
    cardUrl: string
}

const CurrentFavotiteCard: FC<CurrentFavoriteCardProps> = ({ cardUrl }) => {

    return (
        <>
            <div className={style.card}>
                <h3 className={style.card_title}>Current favorite card</h3>
                <img className={style.card_img} src={cardUrl} alt="current favorite card icon" />
            </div>
        </>
    )
}

export default CurrentFavotiteCard