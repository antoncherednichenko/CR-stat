import { FC, memo } from 'react'
import AppCard from '../../../ui/AppCard/AppCard'
import style from './MainInfo.module.scss'
import { MainInfoProps } from '../../../types/types'
import AppTooltip from '../../../ui/AppTooltip/AppTooltip'


const MainInfo: FC<MainInfoProps> = ({
    name,
    tag,
    battleCount,
    bestTrophies,
    currentFavouriteCard,
    expLevel,
    losses,
    starPoints,
    trophies,
    wins,
    threeCrownWins
}) => {
    const tooltipContent = {
        losses,
        wins,
        'Three-crown-wins': threeCrownWins,
        total: wins + losses

    }

    return (
        <>
            <AppCard>
                <div className={style.info}>
                    <div className={style.info_player}>
                        <h2>{name}</h2>
                        <span className={style.tag}>{tag}</span>
                        <div className={style.trophie}>
                           <span>
                               Current trophies: <span className={style.trophie_amount}>{trophies}</span>
                            </span>
                            <AppTooltip 
                                img='https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c'
                                content={tooltipContent}
                            />
                        </div>
                    </div>
                    <div>
                        <img src={currentFavouriteCard.iconUrls.medium} alt="current favorite card icon" />
                    </div>
                </div>
            </AppCard>
        </>
    )
}

export default memo(MainInfo)