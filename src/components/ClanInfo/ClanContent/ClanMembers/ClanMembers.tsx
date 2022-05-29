import { FC, useState } from 'react'
import { MemberI } from '../../../../types/clanTypes'
import SortBtn from '../../../../ui/SortBtn/SortBtn'
import style from './ClanMembers.module.scss'

interface ClanMembersProps {
    members: MemberI[]
}

const ClanMembers: FC<ClanMembersProps> = ({ members }) => {

    const [renderList, setRenderList] = useState(members)
    const [sortState, setSortState] = useState({
        name: 'ASK',
        role: 'ASK',
        lastSeen: 'ASK',
        trophies: 'ASK',
        donated: 'ASK',
        recieved: 'ASK',
    })

    const sortByName = () => { console.log('sort') }
    const sortByRole = () => { console.log('sort') }
    const sortByLastSeen = () => { console.log('sort') }
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

    return (
        <>
            <div className={style.members}>
                <p><b>Members:</b> {members.length}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name <SortBtn clickCallback={sortByName} /></th>
                            <th>Role <SortBtn clickCallback={sortByRole} /></th>
                            <th>Last seen <SortBtn clickCallback={sortByLastSeen} /></th>
                            <th>Trophies <SortBtn clickCallback={sortByTrophies} /></th>
                            <th>Donated <SortBtn clickCallback={sortByDonated} /></th>
                            <th>Received <SortBtn clickCallback={sortByReceived} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderList.map(m => (
                            <tr key={m.tag}>
                                <td>
                                    <span className={style.name}>{m.name}</span>
                                    <span>{m.tag}</span>
                                </td>
                                <td>{m.role}</td>
                                <td>{m.lastSeen}</td>
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