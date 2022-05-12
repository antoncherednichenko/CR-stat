import { FC, memo, useEffect } from 'react'
import { PlayerInfoI } from '../../../types/playerTypes'
import CurrentDeck from '../CurrentDeck/CurrentDeck'
import MainInfo from '../MainInfo/MainInfo'
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
                    currentFavouriteCard={playerInfo.currentFavouriteCard}
                    expLevel={playerInfo.expLevel}
                    losses={playerInfo.losses}
                    name={playerInfo.name}
                    starPoints={playerInfo.starPoints}
                    tag={playerInfo.tag}
                    trophies={playerInfo.trophies}
                    wins={playerInfo.wins} 
                    threeCrownWins={playerInfo.threeCrownWins}
                />
                <CurrentDeck deck={playerInfo.currentDeck} />
            </div>
        </>
    )
}

export default memo(CombainPlayer)