import { FC, memo } from 'react'
import AppCard from '../../../ui/AppCard/AppCard'
import style from './MainInfo.module.scss'
import { MainInfoProps } from '../../../types/types'
import PlayerName from './PlayerName/PlayerName'
import Trophies from './Trophies/Trophies'
import StarPoints from './StarPoints/StarPoints'
import ClanInfo from './ClanInfo/ClanInfo'


const MainInfo: FC<MainInfoProps> = ({
    name,
    tag,
    battleCount,
    bestTrophies,
    expLevel,
    losses,
    starPoints,
    trophies,
    wins,
    threeCrownWins,
    clan,
    role
}) => {

    return (
        <>
            <AppCard>
                <div className={style.info}>
                    <PlayerName level={expLevel} name={name} tag={tag} role={role} />
                    <Trophies
                        battleCount={battleCount}
                        bestTrophies={bestTrophies}
                        losses={losses}
                        threeCrownWins={threeCrownWins}
                        trophies={trophies}
                        wins={wins} 
                    />
                    <StarPoints>{starPoints}</StarPoints>
                    <ClanInfo clan={clan} />
                </div>
            </AppCard>
        </>
    )
}

export default memo(MainInfo)