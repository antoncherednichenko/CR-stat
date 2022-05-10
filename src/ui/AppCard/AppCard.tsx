import { FC, ReactNode } from 'react'
import style from './AppCard.module.scss'

interface AppCardProps {
    children: ReactNode
}

const AppCard: FC<AppCardProps> = ({ children }) => {

    return (
        <>
            <div className={style.card}>
                {children}
            </div>
        </>
    )
}

export default AppCard