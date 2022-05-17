import { FC } from 'react'
import { ClanI } from '../../../../types/playerTypes'
import style from './BattlePlayer.module.scss'

interface BattlePlayerProps {
    name: string,
    tag: string,
    clan: ClanI,
    trophies: number,
    changeTrophies?: number
}

const BattlePlayer: FC<BattlePlayerProps> = ({ name, tag, clan, trophies, changeTrophies }) => {

    

    return (
        <>
            <div className={style.player}>
                <h4 className={style.player_name}>{name}</h4>
                <a 
                    href={`https://link.clashroyale.com/ru?playerInfo?id=${tag}`} 
                    className={style.player_tag}
                    target='_blank'
                >
                    {tag}
                </a>
                { clan?.name && <button className={style.player_clan}>{clan?.name}</button> }
                <div className={style.player_trophies}>
                    <div className={style.start}>
                        <img src="https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c" alt="trohie icon" />
                        <span>{trophies}</span>
                        { 
                            changeTrophies && 
                            <div 
                                className={style.upcoming}
                                style={{ background: changeTrophies > 0 ? '#98e182' : '#db724c' }}
                            >
                                {changeTrophies > 0 ? <span>+{changeTrophies}</span> : <span>{changeTrophies}</span>}
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BattlePlayer