import { FC, memo } from 'react'
import AppCard from '../../../ui/AppCard/AppCard'
import style from './MainInfo.module.scss'
import { MainInfoProps } from '../../../types/types'
import PlayerName from './PlayerName/PlayerName'
import Trophies from './Trophies/Trophies'
import StarPoints from './StarPoints/StarPoints'
import CurrentFavotiteCard from './CurrentFavoriteCard/CurrentFavoriteCard'


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

    return (
        <>
            <AppCard>
                <div className={style.info}>
                        <PlayerName level={expLevel} name={name} tag={tag} />
                        <Trophies
                            battleCount={battleCount}
                            bestTrophies={bestTrophies}
                            losses={losses}
                            threeCrownWins={threeCrownWins}
                            trophies={trophies}
                            wins={wins} 
                        />
                        <StarPoints>{starPoints}</StarPoints>
                    <CurrentFavotiteCard cardUrl={currentFavouriteCard.iconUrls.medium} />
                </div>
            </AppCard>
        </>
    )
}

export default memo(MainInfo)