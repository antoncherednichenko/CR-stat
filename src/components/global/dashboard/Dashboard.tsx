import { FC, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/hooks";
import { toggleLink } from "../../../store/sllices/navSlice";
import AppLink from "../../../ui/AppLink/AppLink";
import style from './Dashboard.module.scss'


const Dashboard: FC = () => {
    const { links } = useTypedSelector(state => state.nav)
    const dispatch = useTypedDispatch()
    const changeLink = (id: number) => { dispatch(toggleLink(id)) }

    return (
        <>
            <nav className={style.dashboard}>
                {links.map(l => (
                    <AppLink 
                        clickHadler={() => { changeLink(l.id) }} 
                        path={l.path}
                        isActive={l.isActive}
                        key={l.id}
                    >
                        {l.title}
                    </AppLink>
                ))}
            </nav>
        </>
    )
}

export default Dashboard