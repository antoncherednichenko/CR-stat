import { FC } from 'react'
import style from './PlayerContent.module.scss'
import { useTypedSelector} from "../../hooks/hooks";
import Loading from "../../ui/Loading/Loading";
import CombainPlayer from './CombainPlayer/CombainPlayer';


export const PlayerContent:FC = () => {
    const { playerInfo }= useTypedSelector(state => state.player)
    const { isPlayerLoading } = useTypedSelector(state => state.player)

    return (
        <>
            { isPlayerLoading && <Loading /> }
            { !isPlayerLoading && playerInfo && <CombainPlayer playerInfo={playerInfo} /> }
        </>
    )
}

export default PlayerContent