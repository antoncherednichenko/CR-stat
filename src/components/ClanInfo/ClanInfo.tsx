import { FC } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/hooks'
import Loading from '../../ui/Loading/Loading'
import ClanContent from './ClanContent/ClanContent'
import style from './ClanInfo.module.scss'
import { FiArrowLeft } from 'react-icons/fi'
import { backToSearch } from '../../store/sllices/clansSlice'

const ClanInfo: FC = () => {

    const dispatch = useTypedDispatch()
    const { isClansLoading, clanInfo } = useTypedSelector(state => state.clans)
    const backToSearchHandler = () => { dispatch(backToSearch()) }

    return (
        <>
            <div className={style.clan}>
                <button onClick={backToSearchHandler} className={style.back}><FiArrowLeft /></button>
                <div className={style.container}>
                    { isClansLoading && <Loading /> }
                    { !isClansLoading && clanInfo && <ClanContent clan={clanInfo} /> }
                </div>
            </div>
        </>
    )
}

export default ClanInfo