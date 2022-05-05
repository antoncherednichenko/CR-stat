import { FC } from "react";
import style from './Layout.module.scss'
import Dashboard from "../dashboard/Dashboard";

interface ILayout {
    children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {

    return (
        <>
            <div className={style.layout}>
                <Dashboard />
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout