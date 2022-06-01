import { FC } from 'react'
import { useClanTag } from '../../../hooks/hooks'
import { ClanI } from '../../../types/clanTypes'
import style from './ClanItem.module.scss'

interface ClanItemProps {
    clan: ClanI
}

const ClanItem: FC<ClanItemProps> = ({ clan }) => {

    const findClan = useClanTag()

    return (
        <>
            <li className={style.clan}>
                <div className={style.clan_name}>
                    <div className={style.clan_name__first_column}>
                        <h4>{clan.name}</h4>
                        <button onClick={() => findClan(clan.tag)}>{clan.tag}</button>
                    </div>
                    <div className={style.clan_name__second_column}>
                        <span className={style.type}>{clan.type}</span>
                        <span className={style.trophies}>Required trophies: {clan.requiredTrophies}</span>
                    </div>
                </div>
                <div className={style.clan_info}>
                    <div>
                        <span><b>Location:</b> {clan.location.name}</span>
                        <span><b>Members:</b> {clan.members}</span>
                        <span><b>Clan chest level:</b> {clan.clanChestLevel}</span>
                        <span><b>Week donation:</b> {clan.donationsPerWeek}</span>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ClanItem