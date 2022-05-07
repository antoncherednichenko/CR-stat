import { Children, FC, ReactNode } from 'react'
import style from './PageHeader.module.scss'

interface PageHeaderProps {
    children: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {

    return (
        <>
            <h2 className={style.page_header}>{children}</h2>
        </>
    )
}

export default PageHeader