import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '~/src/services/store'

import User from '~src/features/user/types/User'
import { userMock } from './__mocks__/user.mock'

export interface AuthState {
  usersById: Record<string, User>
  currentUser?: User
}

export const authInitialState: AuthState = {
  usersById: {
    baz: userMock,
  },
  currentUser: userMock,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
})

export default authSlice.reducer

export const getCurrentUser = (state: RootState) => state.auth.currentUser
