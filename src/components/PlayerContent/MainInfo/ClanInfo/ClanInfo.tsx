import { FC, useContext } from 'react'
import { useClanTag } from '../../../../hooks/hooks'
import { tagContext } from '../../../../pages/Player/Player'
import { ClanI } from '../../../../types/playerTypes'
import style from './ClanInfo.module.scss'

interface ClanInfoProps {
    clan: ClanI
}

const ClanInfo: FC<ClanInfoProps> = ({ clan }) => {
    const tag = useContext(tagContext)
    const findClan = useClanTag(clan.tag)

    return (
        <>
            <div className={style.clan_holder}>
                <div className={style.clan}>
                    <span className={style.clan_name}>{clan.name}</span>
                    <button onClick={findClan} className={style.clan_tag}>{clan.tag}</button>
                </div>
            </div>
        </>
    )
}

export default ClanInfo