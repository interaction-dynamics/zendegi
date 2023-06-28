import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/src/services/store'

import Event from './types/Event'
import { eventMock } from './__mocks__/event.mock'

export interface EventState {
  byToken: Record<string, Event>
}

export const eventInitialState: EventState = {
  byToken: {
    bar: eventMock,
  },
}

export const eventSlice = createSlice({
  name: 'event',
  initialState: eventInitialState,
  reducers: {},
})

export default eventSlice.reducer

export const getEventByUrl = (state: RootState, url: string) =>
  state.event.byToken[url]

export const getAllEvents = createSelector(
  (state: RootState) => state.event.byToken,
  (byToken: Record<string, Event>): Event[] => Object.values(byToken),
)
