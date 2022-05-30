import { FC, useState } from 'react'
import { useTypedDispatch } from '../../../../hooks/hooks'
import { MemberI } from '../../../../types/clanTypes'
import style from './ClanMembers.module.scss'
import { showNotify, hideNotify } from '../../../../store/sllices/notifySlice'

interface ClanMembersProps {
    members: MemberI[]
}

const ClanMembers: FC<ClanMembersProps> = ({ members }) => {

    const dispatch = useTypedDispatch()
    const [renderList, setRenderList] = useState(members)
    const [sortState, setSortState] = useState({
        memberName: 'ASK',
        role: 'ASK',
        trophies: 'ASK',
        donated: 'ASK',
        recieved: 'ASK',
    })

    const sortByName = () => {
        const arrForSort = [...members]
        if(sortState.memberName === 'ASK') {
            const sortedList = arrForSort.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
            setSortState({ ...sortState, memberName: 'DESC' })
            setRenderList(sortedList)
        } else if(sortState.memberName === 'DESC') {
            const sortedList = arrForSort.sort((a, b) => b.name.toUpperCase().charCodeAt(0) - a.name.toUpperCase().charCodeAt(0))
            setSortState({ ...sortState, memberName: 'ASK' })
            setRenderList(sortedList)
        }
    }
    const sortByRole = () => {
        const arrForSort = [...members]
        if(sortState.role === 'ASK') {
            const sortedList = arrForSort.sort((a, b) => a.role.charCodeAt(0) - b.role.charCodeAt(0))
            setSortState({ ...sortState, role: 'DESC' })
            setRenderList(sortedList)
        } else if(sortState.role === 'DESC') {
            const sortedList = arrForSort.sort((a, b) => b.role.toUpperCase().charCodeAt(0) - a.role.toUpperCase().charCodeAt(0))
            setSortState({ ...sortState, role: 'ASK' })
            setRenderList(sortedList)
        }
    }
    const sortByTrophies = () => {
        const arrForSort = [...members]
        if(sortState.trophies === 'ASK') {
            const sortedList = arrForSort.sort((a, b) => a.trophies - b.trophies)
            setSortState({...sortState, trophies: 'DESC'})
            setRenderList(sortedList)
        } else if(sortState.trophies === 'DESC') {
            const sortedList = arrForSort.sort((a, b) => b.trophies - a.trophies)
            setSortState({...sortState, trophies: 'ASK'})
            setRenderList(sortedList)
        }
        
    }
    const sortByDonated = () => {
        const arrForSort = [...members]
        if(sortState.donated === 'ASK') {
            const sortedList = arrForSort.sort((a, b) => a.donations - b.donations)
            setSortState({...sortState, donated: 'DESC'})
            setRenderList(sortedList)
        } else if(sortState.donated === 'DESC') {
            const sortedList = arrForSort.sort((a, b) => b.donations - a.donations)
            setSortState({...sortState, donated: 'ASK'})
            setRenderList(sortedList)
        }
    }
    const sortByReceived = () => {
        const arrForSort = [...members]
        if(sortState.recieved === 'ASK') {
            const sortedList = arrForSort.sort((a, b) => a.donationsReceived - b.donationsReceived)
            setSortState({...sortState, recieved: 'DESC'})
            setRenderList(sortedList)
        } else if(sortState.recieved === 'DESC') {
            const sortedList = arrForSort.sort((a, b) => b.donationsReceived - a.donationsReceived)
            setSortState({...sortState, recieved: 'ASK'})
            setRenderList(sortedList)
        }
    }

    const copyTag = (tag: string) => {
        navigator.clipboard.writeText(tag)
        dispatch(showNotify(`Tag ${tag} copied!`))
        setTimeout(() => {
            dispatch(hideNotify())
        }, 5000)
    }

    return (
        <>
            <div className={style.members}>
                <p><b>Members:</b> {members.length}</p>
                <table>
                    <thead>
                        <tr>
                            <th><button className={style['sort-btn']} onClick={sortByName}>Name</button></th>
                            <th><button className={style['sort-btn']} onClick={sortByRole}>Role</button></th>
                            <th><button className={style['sort-btn']} onClick={sortByTrophies}>Trophies</button></th>
                            <th><button className={style['sort-btn']} onClick={sortByDonated}>Donated</button></th>
                            <th><button className={style['sort-btn']} onClick={sortByReceived}>Received</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderList.map(m => (
                            <tr key={m.tag}>
                                <td>
                                    <span className={style.name}>{m.name}</span>
                                    <button onClick={() => copyTag(m.tag)} className={style.tag}>{m.tag}</button>
                                </td>
                                <td>{m.role}</td>
                                <td>{m.trophies}</td>
                                <td>{m.donations}</td>
                                <td>{m.donationsReceived}</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ClanMembers