import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../store/store'

type DispatchFun = () => AppDispatch
export const useAppDispatch: DispatchFun = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
