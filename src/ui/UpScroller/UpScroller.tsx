import { FC } from 'react'
import style from './UpScroller.module.scss'
import { FiChevronUp } from 'react-icons/fi'

const UpScroller: FC = () => {

    const scrollUp = () => {
        const content = document.getElementById('content')
        content?.scrollTo(0, 0)
    }

    return (
        <>
            <button onClick={scrollUp} className={style.scroller}>
                <FiChevronUp />
            </button>
        </>
    )
}

export default UpScroller