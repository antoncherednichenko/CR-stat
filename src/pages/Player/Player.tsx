import { FC, useState } from "react";
import Layout from "../../components/global/layout/Layout";
import PlayerContent from "../../components/PlayerContent/PlayerContent";
import { useTypedDispatch } from "../../hooks/hooks";
import { getId, removeSymbol } from "../../helpers";
import { fetchPlayerInfo } from "../../store/actions/playerActions";
import AppInput from "../../ui/AppInput/AppInput";
import PageHeader from "../../ui/PageHeader/PageHeader";
import Tabs from "../../ui/Tabs/Tabs";
import style from './Player.module.scss'
import { TabType } from "../../types/types";

interface TabsType {
    [key: string]: TabType
}

const Players: FC = () => {
    const dispatch = useTypedDispatch()

    const [tag, setTag] = useState('#QG82PLG88')
    const initialTabs: TabsType = {
        player: { title: 'Player', isActive: true, id: getId() },
        upcomingChests: { title: 'Upcoming chests', isActive: false, id: getId() },
        battleLog: { title: 'Battle log', isActive: false, id: getId() }
    }
    const [tabs, setTabs] = useState(initialTabs)
    const tabsKeys = Object.keys(tabs)

    const tagChanger = (value: string) => { setTag(value) }
    const searchHandler = () => { dispatch(fetchPlayerInfo(removeSymbol(tag, '#'))) }
    const clearHandler = () => { setTag('') }
    const changeTab = (key: string) => {
        tabsKeys.forEach(k => {
            let value = false
            if(k === key) { value = true } 
            setTabs(prevTabs => (
                prevTabs = { 
                    ...prevTabs,
                    [k]: {
                        ...prevTabs[k as keyof TabsType],
                        isActive: value
                    }
                }
            ))
        })
    }

    return (
        <>
            <Layout>
                <PageHeader>Player info</PageHeader>
                <div className={style.input_holder}>
                    <AppInput
                        toWayBindHandler={tagChanger}
                        clickHandler={searchHandler}
                        placeholder='#QG82PLG88' 
                        value={tag}
                        clearValue={clearHandler}
                    />
                    <div className={style.tabs_holder}>
                        <Tabs tabs={tabs} tabHandler={changeTab} />
                    </div>
                </div>
                <div className={style.content}>
                    { tabs.player.isActive && <PlayerContent /> }
                    { tabs.upcomingChests.isActive && <h1>upcomingChests</h1> }
                    { tabs.battleLog.isActive && <h1>battleLog</h1> }
                </div>
            </Layout>
        </>
    )
}

export default Players