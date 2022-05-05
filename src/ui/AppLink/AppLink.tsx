import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from './AppLink.module.scss'

interface IAppLink {
    path: string,
    children: React.ReactNode,
    isActive: boolean,
    clickHadler: Function
}

const AppLink: FC<IAppLink> = ({path, children, isActive = false, clickHadler}) => {
    const [styleList, setStyleList] = useState([style.app_link])
    useEffect(() => {
        if(isActive) { setStyleList(prev => prev.concat(style.active)) }
        return
    }, [isActive])

    return (
        <>
            <Link onClick={() => clickHadler()} className={styleList.join(' ')} to={path}>{children}</Link>
        </>
    )
}

export default AppLink