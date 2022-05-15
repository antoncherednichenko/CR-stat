import style from './MasteryCard.module.scss'
import { FC, useState } from 'react'
import { BadgeI } from '../../../../types/playerTypes'
import Modal from '../../../../ui/Modal/Modal'
import MasteryCardContent from './MasteryCardContent/MasteryCardContent'

interface MasteryCardProps {
    masteryBadges: BadgeI[]
}

const MasteryCard: FC<MasteryCardProps> = ({ masteryBadges }) => {

    const [isModal, setIsModal] = useState(false)
    const closeModal = () => { setIsModal(false) }
    const showModal = () => { setIsModal(true) }

    return (
        <>
            <div className={style.mastery}>
                <img
                    onClick={showModal} 
                    className={style.mastery_img} 
                    src={masteryBadges[0].iconUrls.large} 
                    alt={masteryBadges[0].name} 
                />
                <h3 className={style.mastery_title}>mastery badges</h3>
                {
                    isModal &&
                    <Modal
                        closeHandler={closeModal}
                        header={<h2>Mastery cards badges</h2>} 
                        content={<MasteryCardContent badges={masteryBadges} />}
                    />
                }
            </div>
        </>
    )
}

export default MasteryCard