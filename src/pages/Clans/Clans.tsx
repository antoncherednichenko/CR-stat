import { FC } from 'react'
import ClanInfo from '../../components/ClanInfo/ClanInfo'
import ClanSearch from '../../components/ClanSearch/ClanSearch'
import Layout from '../../components/global/layout/Layout'
import { useTypedSelector } from '../../hooks/hooks'
import PageHeader from '../../ui/PageHeader/PageHeader'

import style from './Clans.module.scss'

const Clans: FC = () =>  {

    const { isSearchComponent } = useTypedSelector(state => state.clans)

    return (
        <>
            <Layout>
                <div>
                <PageHeader>Clans</PageHeader>
                { isSearchComponent && <ClanSearch /> }
                { !isSearchComponent && <ClanInfo /> }
                </div>
            </Layout>
        </>
    )
}

export default Clans