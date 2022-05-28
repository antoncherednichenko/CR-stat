import { FC } from 'react'
import { MemberI } from '../../../../types/clanTypes'
import style from './ClanMembers.module.scss'

interface ClanMembersProps {
    members: MemberI[]
}

const ClanMembers: FC<ClanMembersProps> = ({ members }) => {

    return (
        <>
            <p>Members: {members.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Last seen</th>
                        <th>Trophies</th>
                        <th>Donated</th>
                        <th>Received</th>
                    </tr>
                </thead>
                <tbody>
                    { members.map(m => (
                        <tr>
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
        </>
    )
}

export default ClanMembers