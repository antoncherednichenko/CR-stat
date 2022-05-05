import { FC, useState } from "react";
import AppLink from "../../../ui/AppLink/AppLink";
import style from './Dashboard.module.scss'


const Dashboard: FC = () => {
    const [isActive, setIsActive] = useState(false)
    const changeLink = () => {
        setIsActive(true)
    }

    return (
        <>
            <div className={style.dashboard}>
                <AppLink clickHadler={changeLink} isActive={isActive} path="/">Player</AppLink>
                <AppLink clickHadler={changeLink} isActive={isActive} path="/">Clans</AppLink>
                <AppLink clickHadler={changeLink} isActive={isActive} path="/">Tourmenets</AppLink>
                <AppLink clickHadler={changeLink} isActive={isActive} path="/">Chalenges</AppLink>
                <AppLink clickHadler={changeLink} isActive={isActive} path="/">Create deck</AppLink>
            </div>
        </>
    )
}

export default Dashboard