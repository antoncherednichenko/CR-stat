import { FC } from "react";
import style from './Layout.module.scss'
import Dashboard from "../dashboard/Dashboard";
import { useTypedSelector } from "../../../hooks/hooks";

interface ILayout {
    children: React.ReactNode
}


const Layout: FC<ILayout> = ({ children }) => {

    const { contentOverflow } = useTypedSelector(state => state.nav)

    return (
        <>
            <div className={style.layout}>
                <Dashboard />
                <div style={{ overflowY: contentOverflow as 'auto' | 'hidden' }} className={style.content}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout