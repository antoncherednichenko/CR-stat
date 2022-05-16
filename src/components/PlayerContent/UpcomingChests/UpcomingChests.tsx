import { FC } from 'react'
import { getId, getChestIcon } from '../../../helpers'
import { useTypedSelector } from '../../../hooks/hooks'
import Loading from '../../../ui/Loading/Loading'
import style from './UpcomingChests.module.scss'

const UpcomingChests: FC = () => {
    const { isChestsLoading, upcomingChests } = useTypedSelector(state => state.player)
    
    return (
        <>
            <div className={style.chests}>
                <h2 className={style.chests_title}>Upcoming chests</h2>
                { isChestsLoading && <Loading /> }
                { !isChestsLoading && upcomingChests.length &&  upcomingChests.map(c => (
                    <div className={style.chests_holder} key={c.name + getId()}>
                        <div 
                            className={style.chests_icon} 
                            style={{ backgroundImage: `url(${getChestIcon(c.name)})` }}
                        >
                            <span className={style.chests_index}>+{c.index}</span>
                        </div>
                        <h3 className={style.chests_name}>{c.name}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UpcomingChests