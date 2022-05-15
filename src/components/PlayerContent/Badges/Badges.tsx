import { FC } from 'react'
import { getBadges, getMasteryCardsBadges } from '../../../helpers'
import { BadgeI } from '../../../types/playerTypes'
import Badge from './Badge/Badge'
import style from './Badges.module.scss'
import MasteryCard from './MasteryCard/MasteryCard'

interface BadgesProps {
    badges: BadgeI[]
}

const Badges: FC<BadgesProps> = ({ badges }) => {

    const masteryCardsBadges = getMasteryCardsBadges(badges)
    const playerBadges = getBadges(badges)

    return (
        <>
            <div className={style.badges}>
                <h3 className={style.badges_title}>Badges</h3>
                <div className={style.container}>
                    <div className={style.badges_holder}>
                        {playerBadges.map(b => (
                            <Badge key={b.iconUrls.large} badge={b} />
                        ))}
                        <MasteryCard
                            masteryBadges={masteryCardsBadges} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Badges