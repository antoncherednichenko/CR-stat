import { FC, useEffect } from "react";
import { checkPath } from "../../../helpers";
import { useTypedDispatch, useTypedSelector } from "../../../hooks/hooks";
import { toggleLink } from "../../../store/sllices/navSlice";
import AppLink from "../../../ui/AppLink/AppLink";
import style from './Dashboard.module.scss'


const Dashboard: FC = () => {
    const { links } = useTypedSelector(state => state.nav)
    const dispatch = useTypedDispatch()
    const changeLink = (id: number) => { dispatch(toggleLink(id)) }

    useEffect(() => {
        links.forEach(l => {
            if(!l.isActive && checkPath(l.path)) {
                dispatch(toggleLink(l.id))
            }
        })
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