import { createSlice } from '@reduxjs/toolkit';
import mockData from "../mock-data.json"

export const gallerySlice = createSlice({
  name: 'counter',
  initialState: {
    values: mockData,
  },
  reducers: {
    toggleLike: (state, action) => {
        state.values = state.values.map((item) => {
            if (item.id === action.payload) {
                return {...item, isLiked: !item.isLiked}
            } else {
                return item;
            }
        })
    },
  },
})

export const { toggleLike } = gallerySlice.actions

export default gallerySlice.reducer