import { FC, useState } from 'react'
import { capitalizeFirst, kebabToString } from '../../helpers'
import style from './AppTooltip.module.scss'

interface AppTooltipProps {
    img: string,
    content: {[key: string]: string | number}
}

const AppTooltip: FC<AppTooltipProps> = ({ img, content }) => {
    const [isVisible, setIsVisible] = useState(false)
    const keys = Object.keys(content)

    const mouseOverHandler = () => { setIsVisible(true) }
    const mouseLeaveHandler = () => { setIsVisible(false) }

    return (
        <>
            <div className={style.tooltip}>
                <img 
                    className={style.tooltip_img} 
                    src={img} 
                    alt="tooltip icon"
                    onMouseOver={mouseOverHandler}
                    onMouseLeave={mouseLeaveHandler} 
                />
                {
                    isVisible
                    &&
                    <ul className={style.tooltip_content}>
                        {keys.map(k => (
                            <li key={k}>
                                <span>{kebabToString(capitalizeFirst(k))}</span>: <span>{content[k]}</span>
                            </li>
                        ))}
                    </ul> 
                }
            </div>
        </>
    )
}

export default AppTooltip