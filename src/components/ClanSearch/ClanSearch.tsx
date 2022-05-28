import { FC, useState, useEffect } from 'react'
import style from './ClanSearch.module.scss'
import AppInput from '../../ui/AppInput/AppInput'
import Loading from '../../ui/Loading/Loading'
import ClanList from '../../components/ClanList/ClanList'
import { useTypedDispatch, useTypedSelector } from '../../hooks/hooks'
import { searchClan } from '../../store/actions/clansActions'

const ClanSearch: FC = () => {

    const dispatch = useTypedDispatch()
    const [clan, setClan] = useState('')
    const { clansList, isClansLoading } = useTypedSelector(state => state.clans)

    const clearClanValue = () => { setClan('') }
    const findClan = () => { dispatch(searchClan(clan.toLowerCase())) }
    const toWayCallback = (value: string) => { setClan(value) }

    return (
        <>
            <div className={style.clans}>
                <div className={style['input-holder']}>
                    <AppInput
                        clearValue={clearClanValue}
                        placeholder="clan name"
                        clickHandler={findClan}
                        toWayBindHandler={toWayCallback}
                        value={clan}
                    />
                </div>
                <div className={style.container}>
                    { isClansLoading && <Loading /> }
                    { !isClansLoading && clansList?.length > 0 && <ClanList clans={clansList} /> }
                </div>
            </div>
        </>
    )
}

export default ClanSearch