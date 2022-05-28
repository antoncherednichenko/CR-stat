import { FC } from 'react'
import { ClanI } from '../../types/clanTypes'
import ClanItem from './ClanItem/ClanItem'
import style from './ClanList.module.scss'

interface ClanListI {
    clans: ClanI[]
}

const ClanList: FC<ClanListI> = ({ clans }) => {

    return (
        <>
            <ul>
                {clans.map(c => (
                    <ClanItem key={c.tag} clan={c} />
                ))}
            </ul>
        </>
    )
}

export default ClanList