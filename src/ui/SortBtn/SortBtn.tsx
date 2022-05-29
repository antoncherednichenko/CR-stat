import { FC, useState } from 'react'
import style from './SortBtn.module.scss'
import { FiChevronDown } from 'react-icons/fi'

interface SortBtnProps {
    clickCallback: Function
}

const SortBtn: FC<SortBtnProps> = ({ clickCallback }) => {

    const [isSorted, setIsSorted] = useState(false)
    const positionStyles = {
        transform: !isSorted ? 'rotate(0deg)' : 'rotate(-180deg)',
    }

    const clickHandler = () => {
        setIsSorted(!isSorted)
        clickCallback()
    }

    return (
        <>
            <button onClick={clickHandler} style={positionStyles} className={style.sort}>
                <FiChevronDown />
            </button>
        </>
    )
}

export default SortBtn