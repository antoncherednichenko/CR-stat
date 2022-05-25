import { FC, useEffect, useState } from 'react'
import Layout from '../../components/global/layout/Layout'
import { useTypedDispatch, useTypedSelector } from '../../hooks/hooks'
import { searchClan } from '../../store/actions/clansActions'
import AppInput from '../../ui/AppInput/AppInput'
import Loading from '../../ui/Loading/Loading'
import PageHeader from '../../ui/PageHeader/PageHeader'
import style from './Clans.module.scss'

const Clans: FC = () =>  {

    const dispatch = useTypedDispatch()
    const [clan, setClan] = useState('')
    const { clansList, isClansLoading } = useTypedSelector(state => state.clans)

    const clearClanValue = () => { setClan('') }
    const findClan = () => { dispatch(searchClan(clan.toLowerCase())) }
    const toWayCallback = (value: string) => { setClan(value) }

    useEffect(() => { console.log(clansList, clan) }, [clansList])

    return (
        <>
            <Layout>
                <div className={style.clans}>
                    <PageHeader>Clans</PageHeader>
                    <div className={style['input-holder']}>
                        <AppInput
                            clearValue={clearClanValue}
                            placeholder="clan tag or name"
                            clickHandler={findClan}
                            toWayBindHandler={toWayCallback}
                            value={clan}
                        />
                    </div>
                    <div className={style.container}>
                        { isClansLoading && <Loading /> }
                        { !isClansLoading && clansList?.length > 0 && <h2>Clans content</h2> }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Clans