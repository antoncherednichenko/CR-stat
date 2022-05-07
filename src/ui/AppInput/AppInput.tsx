import { FC, useState } from 'react'
import { FiSearch, FiX } from "react-icons/fi" 
import style from './AppInput.module.scss'

interface AppInputProps {
    toWayBindHandler: Function,
    value: string,
    placeholder: string,
    clickHandler: Function,
    clearValue: Function
}

const AppInput: FC<AppInputProps> = ({ 
    toWayBindHandler, 
    value, placeholder, 
    clickHandler,
    clearValue 
}) => {

    const onChangeHandler = (e: { target: HTMLInputElement; }): void => {
        toWayBindHandler(e.target.value.toUpperCase().trim())
    }

    return (
        <>
            <div className={style.input_container}>
                <input
                    className={style.input}
                    value={value} 
                    onChange={onChangeHandler} 
                    type="text" 
                    placeholder={placeholder}
                />
                <button onClick={() => clickHandler()}><FiSearch size={30}/></button>
                { !!value.length && <button onClick={() => clearValue()}><FiX size={30} /></button> }
            </div>
        </>
    )
}

export default AppInput