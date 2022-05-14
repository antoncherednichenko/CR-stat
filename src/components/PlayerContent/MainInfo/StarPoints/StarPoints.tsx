import { FC, ReactNode } from 'react'
import style from './StarPoints.module.scss'

interface StarPointsProps {
    children: ReactNode
}

const StarPoints: FC<StarPointsProps> = ({ children }) => {

    return (
        <>
            <div className={style.points_holder}>
                <div className={style.points}>
                    <div className={style.points_star}></div>
                    <span className={style.points_value}>{children}</span>
                </div>
            </div>
        </>
    )
}

export default StarPoints