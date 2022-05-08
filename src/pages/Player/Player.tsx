import { FC, useState } from "react";
import Layout from "../../components/global/layout/Layout";
import { useTypedDispatch } from "../../hooks/hooks";
import { fetchPlayerInfo } from "../../store/actions/playerActions";
import AppInput from "../../ui/AppInput/AppInput";
import PageHeader from "../../ui/PageHeader/PageHeader";
import style from './Player.module.scss'

const Players: FC = () => {
    const dispatch = useTypedDispatch()
    const [tag, setTag] = useState('')
    const tagChanger = (value: string) => { setTag(value) }
    const searchHandler = () => {   
        dispatch(fetchPlayerInfo())
    }
    const clearHandler = () => { setTag('') }

    return (
        <>
            <Layout>
                <PageHeader>Player info</PageHeader>
                <div className={style.input_holder}>
                    <AppInput
                        toWayBindHandler={tagChanger}
                        clickHandler={searchHandler}
                        placeholder='#QG82PLG88' 
                        value={tag}
                        clearValue={clearHandler}
                    />
                </div>
            </Layout>
        </>
    )
}

export default Players