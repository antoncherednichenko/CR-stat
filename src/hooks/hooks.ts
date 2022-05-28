import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getClanByTag } from '../store/actions/clansActions'
import type { RootState, AppDispatch } from '../store/store'
import store from '../store/store'
import { useLocation, useNavigate } from 'react-router-dom'
import { removeSymbol } from '../helpers'
import { disableAllNavLinks } from '../store/sllices/navSlice'
import { startLoading } from '../store/sllices/clansSlice'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>()

export const useRootState = () => store.getState()

export const useClanTag = (tag: string) => {

    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    return () => {
        dispatch(disableAllNavLinks())
        navigate('/clans')
        dispatch(startLoading())
        dispatch(getClanByTag(removeSymbol(tag, '#')))
    }
}