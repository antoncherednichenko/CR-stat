import { FC } from 'react'
import { BattleI } from '../../../types/playerTypes'
import style from './Battle.module.scss'

interface BatlleProps {
    battle: BattleI
}

const Battle: FC<BatlleProps> = ({ battle }) => {

    return (
        <>
            <div className={style.battle}>
                <div className={style.battle_info}>
                    <h4 className={style.title}>{battle.type}</h4>
                    <div className={style.result}>
                        <img src="https://cdn.royaleapi.com/static/img/ui/crown-blue.png?t=5fe83973c" alt="blue crown" />
                        <div className={style.crown_count}>
                            <span>{battle.team[0].crowns}</span> - <span>{battle.team[0].crowns}</span>
                        </div>
                        <img src="https://cdn.royaleapi.com/static/img/ui/crown-red.png?t=fb34e44ec" alt="red crown" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Battle