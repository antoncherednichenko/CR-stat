import { FC } from 'react'
import { BattleI } from '../../../types/playerTypes'
import style from './Battle.module.scss'
import BattleInfo from './BattleInfo/BattleInfo'
import BattlePlayer from './BattlePlayer/BattlePlayer'

interface BatlleProps {
    battle: BattleI
}

const Battle: FC<BatlleProps> = ({ battle }) => {

    return (
        <>
            <div className={style.battle}>
                <BattleInfo
                    battleType={battle.type}
                    playerCrowns={battle.team[0].crowns}
                    opponentCrowns={battle.opponent[0].crowns} 
                />
                <div className={style.battle_players}>
                    <BattlePlayer
                        clan={battle.team[0].clan}
                        name={battle.team[0].name}
                        tag={battle.team[0].tag}
                        trophies={battle.team[0].startingTrophies}
                        changeTrophies={battle.team[0].trophyChange} 
                    />
                    <BattlePlayer
                        clan={battle.opponent[0].clan}
                        name={battle.opponent[0].name}
                        tag={battle.opponent[0].tag}
                        trophies={battle.opponent[0].startingTrophies}
                        changeTrophies={battle.opponent[0].trophyChange} 
                    />
                </div>  
            </div>
        </>
    )
}

export default Battle