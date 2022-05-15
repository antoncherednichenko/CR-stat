import { FC, useEffect, useState } from 'react'
import { getPracents } from '../../../../../helpers'
import style from './BadgeInfo.module.scss'

interface BadgeInfoProps {
    level: number,
    maxLevel: number,
    progress: number,
    target: number
}

const BadgeInfo: FC<BadgeInfoProps> = ({ level, maxLevel, progress, target }) => {

    const [currentPos, setCurrentPos] = useState('-50%')
    const currentWidth = getPracents(target, progress)

    useEffect(() => {
        setCurrentPos('0')
        return () => { setCurrentPos('-50%') }
    }, [])

    return (
        <>
            <div style={{ bottom: currentPos }} className={style.info}>
                <div className={style.info_level}>
                    <span>
                        Level: <span className={style.value}>{level}</span>
                    </span>
                    <span>
                        Max level: <span className={style.value}>{maxLevel}</span>
                    </span>
                </div>
                <div className={style.info_progress}>
                    <div className={style.holder}>
                        <div style={{ width: currentWidth }} className={style.load}></div>
                        <span className={style.pracents}>Progress: {currentWidth}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeInfo