import { FC } from 'react'
import { BadgeI } from '../../../../../types/playerTypes'
import Badge from '../../Badge/Badge'
import style from './MasteryCardContent.module.scss'

interface MasteryCardContentProps {
    badges: BadgeI[]
}

const MasteryCardContent: FC<MasteryCardContentProps> = ({ badges }) => {

    return (
        <>
            <div className={style.content}>
                {badges.map(b => (
                    <Badge key={b.iconUrls.large} badge={b} />
                ))}
            </div>
        </>
    )
}

export default MasteryCardContent