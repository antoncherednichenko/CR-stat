import { FC, memo } from 'react'
import { useClanTag, useTypedDispatch } from '../../hooks/hooks'
import { TopPlayerI } from '../../types/playerTypes'
import style from './TopPlayers.module.scss'
import { showNotify, hideNotify } from '../../store/sllices/notifySlice'

interface TopPlayersTableProps {
    players: TopPlayerI[]
}

const TopPlayersTable: FC<TopPlayersTableProps> = ({ players }) => {

    const dispatch = useTypedDispatch()

    const findClan = useClanTag()
    const copyTag = (tag: string) => {
        navigator.clipboard.writeText(tag)
        dispatch(showNotify(`Tag ${tag} copied!`))
        setTimeout(() => {
            dispatch(hideNotify())
        }, 5000)
    }


    return (
        <>
            <table>
                <tbody>
                    {players.map(p => (
                        <tr key={p.tag}>
                            <td>
                                <span className={style.name}>{p.name}</span>
                                <button onClick={() => copyTag(p.tag)} className={style.tag}>{p.tag}</button>
                            </td>
                            <td>
                                <div className={style.trophies}>
                                    <img src="https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c" alt="trophie icon" />
                                    <span>{p.trophies}</span>
                                </div>
                                <div className={style.arena}><b>Arena:</b> {p.arena.name}</div>
                            </td>
                            <td>
                                {
                                    p.clan && 
                                    <div className={style.clan}>
                                        <span>{p.clan.name}</span>
                                        <button onClick={() => findClan(p.clan.tag)}>{p.clan.tag}</button>
                                    </div>
                                }
                            </td>  
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default memo(TopPlayersTable)