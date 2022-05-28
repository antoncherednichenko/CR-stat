import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/hooks";
import { checkNavMenu, toggleLink } from "../../../store/sllices/navSlice";
import AppLink from "../../../ui/AppLink/AppLink";
import style from './Dashboard.module.scss'


const Dashboard: FC = () => {
    const { links } = useTypedSelector(state => state.nav)
    const dispatch = useTypedDispatch()
    const changeLink = (id: number) => { dispatch(toggleLink(id)) }
    const path = useLocation().pathname

    useEffect(() => {
        dispatch(checkNavMenu(path))
    }, [])

    return (
        <>
            <nav className={style.dashboard}>
                {links.map(l => (
                    <AppLink 
                        clickHadler={() => changeLink(l.id)} 
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