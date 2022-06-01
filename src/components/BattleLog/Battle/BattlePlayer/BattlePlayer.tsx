import { FC } from 'react'
import { CardI, ClanI } from '../../../../types/playerTypes'
import style from './BattlePlayer.module.scss'
import { FiCopy } from 'react-icons/fi'
import { useClanTag, useTypedDispatch } from '../../../../hooks/hooks'
import { hideNotify, showNotify } from '../../../../store/sllices/notifySlice'
 
interface BattlePlayerProps {
    name: string,
    tag: string,
    clan: ClanI,
    trophies: number,
    changeTrophies?: number,
    deck: CardI[],
    direction: 'right' | 'left'
}

const BattlePlayer: FC<BattlePlayerProps> = ({ name, tag, clan, trophies, changeTrophies, deck, direction }) => {

    const dispatch = useTypedDispatch()
    const copy = (value: string): void => {
        navigator.clipboard.writeText(value)
        dispatch(showNotify(`Tag ${value} copied!`))
        setTimeout(() => {
            dispatch(hideNotify())
        }, 5000)
    } 
    const findClan = useClanTag()

    return (
        <>  
            <div className={style.player}>
                <div className={style.player_wrapper} style={{ float: direction }}>
                    <h4 className={style.player_name}>{name}</h4>
                    <span className={style.tag_holder}>
                        <a 
                            href={`https://link.clashroyale.com/ru?playerInfo?id=${tag}`} 
                            className={style.player_tag}
                            target='_blank'
                        >
                            {tag}
                        </a>
                        <button onClick={() => copy(tag)} className={style.copy}><FiCopy /></button>
                    </span>
                    { clan?.name && <button onClick={() => findClan(clan?.tag)} className={style.player_clan}>{clan?.name}</button> }
                    <div className={style.player_trophies}>
                        <div className={style.start}>
                            <img src="https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c" alt="trohie icon" />
                            <span>{trophies}</span>
                            { 
                                changeTrophies && 
                                <div 
                                    className={style.upcoming}
                                    style={{ background: changeTrophies > 0 ? '#98e182' : '#db724c' }}
                                >
                                    {changeTrophies > 0 ? <span>+{changeTrophies}</span> : <span>{changeTrophies}</span>}
                                </div> 
                            }
                        </div>
                    </div>
                </div>
                <div className={style.player_deck}>
                        {deck.map(c => (
                            <img key={c.id} src={c.iconUrls.medium} alt={c.name} />
                        ))}
                </div>
            </div>
        </>
    )
}

export default BattlePlayer