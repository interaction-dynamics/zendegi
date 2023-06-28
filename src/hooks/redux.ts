// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '~/src/services/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = (
  selector: any,
  ...args: any
) => useSelector(state => selector(state, ...args))
