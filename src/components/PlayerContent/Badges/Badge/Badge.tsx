import { FC, useState } from 'react'
import { camelCaseToNormal, capitalizeFirst } from '../../../../helpers'
import { BadgeI } from '../../../../types/playerTypes'
import style from './Badge.module.scss'
import BadgeInfo from './BadgeInfo/BadgeInfo'

interface BadgeProps {
    badge: BadgeI
}

const Badge: FC<BadgeProps> = ({ badge }) => {

    const [isInfo, setIsInfo] = useState(false)
    const toggleInfo = () => setIsInfo(!isInfo)

    return (
        <>
            <div onClick={toggleInfo} className={style.badge}>
                <img
                    className={style.badge_img} 
                    src={badge.iconUrls.large} 
                    alt={badge.name} 
                />
                <h3 className={style.badge_title}>{camelCaseToNormal(badge.name)}</h3>
                { 
                    isInfo && 
                    <BadgeInfo
                        level={badge.level}
                        maxLevel={badge.maxLevel}
                        progress={badge.progress}
                        target={badge.target} 
                    /> 
                }
            </div>
        </>
    )
}

export default Badge