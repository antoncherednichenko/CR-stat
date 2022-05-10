import { FC } from 'react'
import style from './Tabs.module.scss'
import { TabType } from '../../types/types'

interface TabsProps {
    tabs: {[key: string]: TabType},
    tabHandler: Function
}

const Tabs: FC<TabsProps> = ({ tabs, tabHandler }) => {
    const tabsArr = Object.keys(tabs)

    return (
        <>
            <ul className={style.tabs}>
                { tabsArr.map(key => (
                    <li key={tabs[key].id}>
                        <button 
                            className={tabs[key].isActive ? [style.tabs__element, style.active].join(' ') : style.tabs__element} 
                            onClick={() => tabHandler(key)}
                        >
                            {tabs[key].title}
                        </button>
                    </li>
                    
                )) }
            </ul>
        </>
    )
}

export default Tabs