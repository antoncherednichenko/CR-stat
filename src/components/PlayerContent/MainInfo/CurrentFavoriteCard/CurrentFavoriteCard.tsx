import { FC } from 'react'
import style from './CurrerntFovoriteCard.module.scss'

interface CurrentFavoriteCardProps {
    cardUrl: string
}

const CurrentFavotiteCard: FC<CurrentFavoriteCardProps> = ({ cardUrl }) => {

    return (
        <>
            <div className={style.card}>
                <img title='Current favorite card' className={style.card_img} src={cardUrl} alt="current favorite card icon" />
            </div>
        </>
    )
}

export default CurrentFavotiteCard