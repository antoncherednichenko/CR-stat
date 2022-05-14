import { FC, memo, useEffect } from 'react'
import { PlayerInfoI } from '../../../types/playerTypes'
import CurrentDeck from '../CurrentDeck/CurrentDeck'
import MainInfo from '../MainInfo/MainInfo'
import OpenCards from '../OpenCards/OpenCards'
import UpcomingChests from '../UpcomingChests/UpcomingChests'
import style from  './CombainPlayer.module.scss'

interface CombainePlayerProps {
    playerInfo: PlayerInfoI
}

const CombainPlayer: FC<CombainePlayerProps> = ({ playerInfo }) => {

    useEffect(() => {
        console.log(playerInfo)
    }, [])

    return (
        <>
            <div className={style.combaine}>
                <MainInfo
                    battleCount={playerInfo.battleCount}
                    bestTrophies={playerInfo.bestTrophies}
                    expLevel={playerInfo.expLevel}
                    losses={playerInfo.losses}
                    name={playerInfo.name}
                    starPoints={playerInfo.starPoints}
                    tag={playerInfo.tag}
                    trophies={playerInfo.trophies}
                    wins={playerInfo.wins} 
                    threeCrownWins={playerInfo.threeCrownWins}
                    clan={playerInfo.clan}
                    role={playerInfo.role}
                />
                <CurrentDeck 
                    deck={playerInfo.currentDeck} 
                    favoriteCard={playerInfo.currentFavouriteCard} 
                />
                <UpcomingChests />
                <OpenCards playerCards={playerInfo.cards} />
            </div>
        </>
    )
}

export default memo(CombainPlayer)