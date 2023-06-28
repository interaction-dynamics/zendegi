import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'

import type { RootState } from '~/src/services/store'

import Gallery from '~src/types/gallery/Gallery'
import Picture from '~src/types/gallery/Picture'
import { galleryMock } from './__mocks__/gallery.mock'

export interface GalleryState {
  byId: Record<string, Gallery>
  favoritesByGalleryId: Record<string, Picture[]>
}

export const galleryInitialState: GalleryState = {
  byId: {
    baz: galleryMock,
  },
  favoritesByGalleryId: {},
}

const getImageId = (image: Picture) => image.url

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState: galleryInitialState,
  reducers: {
    toggleAddRemoveFavorite: (state, action) => {
      const { image, galleryId } = action.payload

      const imageId = getImageId(image)

      if (!state.favoritesByGalleryId[galleryId]) {
        state.favoritesByGalleryId[galleryId] = []
      }

      if (
        state.favoritesByGalleryId[galleryId]?.find(
          i => getImageId(i) === imageId,
        )
      ) {
        state.favoritesByGalleryId[galleryId] = state.favoritesByGalleryId[
          galleryId
        ].filter(i => getImageId(i) !== imageId)
      } else {
        state.favoritesByGalleryId[galleryId].push(image)
      }
    },
  },
})

export const { toggleAddRemoveFavorite } = gallerySlice.actions

export default gallerySlice.reducer

export const getGalleryById = (state: RootState, galleryId: string) =>
  state.gallery.byId[galleryId]

export const getFavoriteImages = (state: RootState, galleryId: string) =>
  state.gallery.favoritesByGalleryId[galleryId] ?? []

export const isFavoriteImage = (
  state: RootState,
  galleryId: string,
  image: Picture,
) =>
  (state.gallery.favoritesByGalleryId[galleryId] ?? []).find(
    i => getImageId(i) === getImageId(image),
  )
