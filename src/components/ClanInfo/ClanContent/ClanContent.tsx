import { FC } from 'react'
import { removeSymbol } from '../../../helpers'
import { ClanInfoI } from '../../../types/clanTypes'
import CountryFlag from '../../../ui/CountryFlag/CountryFlag'
import style from './ClanContent.module.scss'
import ClanMembers from './ClanMembers/ClanMembers'

interface ClnaContentProps {
    clan: ClanInfoI
}

const ClanContent: FC<ClnaContentProps> = ({ clan }) => {

    console.log(clan)

    return (
        <>
            <div className={style.clan}>
                <div className={style.clan_description}>
                    <h2 className={style.name}>
                        {clan.name}
                        <span className={style.type}>{clan.type}</span>
                    </h2>
                    <a 
                        href={`https://link.clashroyale.com/ru?clanInfo?id=${removeSymbol(clan.tag, '#')}`} 
                        target="_blank"
                        className={style.tag}
                    >
                        {clan.tag}
                    </a>
                    <span className={style.location}>
                        { clan.location?.countryCode && <CountryFlag countryCode={clan.location.countryCode} /> }
                        {clan.location.name}
                    </span>
                    <span className={style.trophies}>
                        <img src="https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c" alt="trophie icon" />
                        <b>Trophies:</b> {clan.clanWarTrophies}
                    </span>
                    { clan.description && <p className={style.descr}>{clan.description}</p> }
                </div>
                <ClanMembers members={clan.memberList} />
            </div>
        </>
    )
}

export default ClanContent