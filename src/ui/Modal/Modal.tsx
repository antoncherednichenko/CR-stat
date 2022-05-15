import { FC, ReactNode, useContext, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { useTypedDispatch } from '../../hooks/hooks'
import { changeContentOverflow } from '../../store/sllices/navSlice'
import style from './Modal.module.scss'

interface ModalProps {
    closeHandler: Function,
    header?: ReactNode,
    content: ReactNode
}

const Modal: FC<ModalProps> = ({ closeHandler, header, content }) => {

    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(changeContentOverflow('hidden'))
        return () => { dispatch( changeContentOverflow('auto')) }
    }, [])

    return (
        <>
            <div className={style.modal}>
                <div className={style.modal_body}>
                    <div className={style.modal_header}>
                        {header}
                        <button onClick={() => closeHandler()} className={style.cross}><FiX /></button>
                    </div>
                    <div className={style.modal_content}>{content}</div>
                </div>
            </div>  
        </>
    )
}

export default Modal