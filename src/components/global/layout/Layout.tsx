import { FC, useEffect, useState } from "react";
import style from './Layout.module.scss'
import Dashboard from "../dashboard/Dashboard";
import { useTypedSelector } from "../../../hooks/hooks";
import AppNotify from "../../../ui/AppNotify/AppNotify";
import UpScroller from "../../../ui/UpScroller/UpScroller";

interface ILayout {
    children: React.ReactNode
}


const Layout: FC<ILayout> = ({ children }) => {

    const { contentOverflow } = useTypedSelector(state => state.nav)
    const { isShow } = useTypedSelector(state => state.notify)
    const [offset, setOffset] = useState(0)
    const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
        setOffset(e.currentTarget.scrollTop)
    }

    return (
        <>
            <div className={style.layout}>
                <Dashboard />
                <div onScroll={scrollHandler} id="content" style={{ overflowY: contentOverflow as 'auto' | 'hidden' }} className={style.content}>
                    {children}
                    { isShow && <AppNotify /> }
                    { offset > 800 && <UpScroller /> }
                </div>
            </div>
        </>
    )
}

export default Layout