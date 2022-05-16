import { FC, memo, useEffect } from 'react'
import { useTypedSelector } from '../../hooks/hooks'
import Loading from '../../ui/Loading/Loading'
import Battle from './Battle/Battle'
import style from './BattleLog.module.scss'
import { getId } from '../../helpers'

const BattleLog: FC = () => {
    const { battleLog, isBattleLogLoading } = useTypedSelector(state => state.player)

    useEffect(() => {
        console.log(battleLog)
    }, [battleLog])

    return (
        <>
            <div className={style.battles}>
                <div className={style.container}>
                    { isBattleLogLoading && <Loading /> }
                    {
                        !isBattleLogLoading && 
                        !!battleLog.length &&
                        <>
                            <h2 className={style.battles_title}>Battle log</h2>
                            {battleLog.map(b => (
                                <Battle key={b.battleTime + getId()} battle={b}/>
                            ))}
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default memo(BattleLog)