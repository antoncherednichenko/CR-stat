import { FC } from 'react'
import style from './Trophies.module.scss'
import AppTooltip from '../../../../ui/AppTooltip/AppTooltip'

interface TrophiesProps {
    losses: number,
    wins: number,
    threeCrownWins: number,
    battleCount: number,
    trophies: number,
    bestTrophies: number
}

const Trophies: FC<TrophiesProps> = ({ 
    losses, 
    wins, 
    threeCrownWins, 
    battleCount, 
    trophies, 
    bestTrophies 
}) => {

    const tooltipContent = {
        losses,
        wins,
        'Three-crown-wins': threeCrownWins,
        'Battle-count': battleCount

    }

    return (
        <>
            <div>
                <div className={style.trophie}>
                    <span className={style.trophie_amount}>{trophies}</span>
                    <AppTooltip 
                        img='https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c'
                        content={tooltipContent}
                    />
                </div>
                <div>Best season: <span className={style.trophie_amount}>{bestTrophies}</span></div>
            </div>
        </>
    )
}

export default Trophies