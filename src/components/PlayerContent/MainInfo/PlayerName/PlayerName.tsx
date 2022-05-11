import { FC } from 'react'
import style from './PlayerName.module.scss'

interface PlayerNameProps {
    name: string,
    tag: string,
    level: number
}


const PlayerName: FC<PlayerNameProps> = ({ name, tag, level }) => {

    return (
        <>
            <div className={style.name}>
                <div className={style.nick}>
                    <div className={style.level}>
                        <div className={style.level_star}></div>
                        <span className={style.level_amount}>{level}</span>
                    </div>
                    <h3>{name}</h3>
                </div>
                <a 
                    href={`https://link.clashroyale.com/ru?playerInfo?id=${tag}`} 
                    className={style.tag}
                    target='_blank'
                >
                    {tag}
                </a>
            </div>
        </>
    )
}

export default PlayerName