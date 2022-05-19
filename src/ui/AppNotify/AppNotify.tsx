import { FC, useEffect, useState } from 'react'
import { useTypedDispatch, useTypedSelector } from '../../hooks/hooks'
import { hideNotify } from '../../store/sllices/notifySlice'
import style from './AppNotify.module.scss'

const AppNotify: FC = () => {

    const dispatch = useTypedDispatch()
    const { value } = useTypedSelector(state => state.notify)
    const [topValue, setTopValue] = useState('-50%')
    const hide = () => { dispatch(hideNotify()) }

    useEffect(() => {
        setTopValue('25px')
        return () => { setTopValue('-50%') }
    }, [])

    return (
        <>
            {
                <div onClick={hide} style={{ top: topValue }} className={style.notify}>
                    <div className={style.notify_green}></div>
                    <div className={style.notify_value}>{value}</div>
                </div>
            }
        </>
    )
}

export default AppNotify