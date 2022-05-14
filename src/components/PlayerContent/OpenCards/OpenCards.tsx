import { FC } from 'react'
import { getUnfinedCards } from '../../../helpers'
import { useTypedSelector } from '../../../hooks/hooks'
import { CardI } from '../../../types/playerTypes'
import CardChart from './CardChart/CardChard'
import style from './OpenCards.module.scss'

interface OpenCardsProps {
    playerCards: CardI[]
}

const OpenCards: FC<OpenCardsProps> = ({ playerCards }) => {
    
    const { allCards } = useTypedSelector(state => state.player)
    const unfinedCards = getUnfinedCards(allCards, playerCards)

    return (
        <>
            <div className={style.cards}>
                <h3 className={style.cards_title}>Cards</h3>
                <div className={style.cards_opened}>
                    { playerCards.map(c => (
                        <img key={c.id} src={c.iconUrls.medium} alt={c.name} />
                    )) }
                </div>
                {
                    unfinedCards.length && 
                    <div className={style.cards_closed}>
                        { unfinedCards.map(c => (
                            <img key={c.id} src={c.iconUrls.medium} alt={c.name} />
                        )) }
                    </div>
                }
                <CardChart 
                    values={[unfinedCards.length, playerCards.length ]}
                    labels={['Closed cards', 'Opened cards' ]}
                />
            </div>
        </>
    )
}

export default OpenCards