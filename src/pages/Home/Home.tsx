import { FC, useEffect } from "react";
import Layout from "../../components/global/layout/Layout";
import TopPlayersTable from "../../components/TopPlayersTable/TopPlayersTable";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks";
import { getTopPlayers } from "../../store/actions/playerActions";
import Loading from "../../ui/Loading/Loading";
import style from './Home.module.scss'

const Home: FC = () => {

    const dispatch = useTypedDispatch()
    const { topPlayers, isLoading } = useTypedSelector(state => state.home)
    useEffect(() => {
        if(topPlayers.length === 0) {
            dispatch(getTopPlayers())
        }
    }, [])

    return (
        <>
            <Layout>
                <div className={style.container}>
                    <h1 className={style.title}>Top 100 Russian players</h1>
                    { isLoading && <Loading /> }
                    { !isLoading && topPlayers.length > 0 && <TopPlayersTable players={topPlayers} /> }
                </div>
            </Layout>
        </>
    )
}

export default Home