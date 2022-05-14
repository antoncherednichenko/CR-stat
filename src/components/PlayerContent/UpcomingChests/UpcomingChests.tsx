import { FC, useContext, useEffect } from 'react'
import { removeSymbol, getId, getChestIcon } from '../../../helpers'
import { useTypedDispatch, useTypedSelector } from '../../../hooks/hooks'
import { tagContext } from '../../../pages/Player/Player'
import { fetchUpcomingChests } from '../../../store/actions/playerActions'
import Loading from '../../../ui/Loading/Loading'
import style from './UpcomingChests.module.scss'

const UpcomingChests: FC = () => {
    const tag = useContext(tagContext)
    const dispatch = useTypedDispatch()
    const { isChestsLoading, upcomingChests } = useTypedSelector(state => state.player)
    

    useEffect(() => {
        dispatch(fetchUpcomingChests(removeSymbol(tag, '#')))
    }, [])
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