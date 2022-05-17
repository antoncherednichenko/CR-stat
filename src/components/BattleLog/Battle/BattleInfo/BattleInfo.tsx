import { FC } from 'react'
import style from './BattleInfo.module.scss'

interface BattleInfoProps {
    battleType: string,
    playerCrowns: number
    opponentCrowns: number
}

const BattleInfo: FC<BattleInfoProps> = ({ battleType, playerCrowns, opponentCrowns }) => {

    return (
        <>
            <div className={style.info}>
                <h4 className={style.title}>{battleType}</h4>
                <div className={style.result}>
                    <img src="https://cdn.royaleapi.com/static/img/ui/crown-blue.png?t=5fe83973c" alt="blue crown" />
                    <div className={style.crown_count}>
                        <span>{playerCrowns}</span> - <span>{opponentCrowns}</span>
                    </div>
                    <img src="https://cdn.royaleapi.com/static/img/ui/crown-red.png?t=fb34e44ec" alt="red crown" />
                </div>
            </div>
        </>
    )
}

export default BattleInfo