import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from "../modules/gallery/redux/reducer"

export default configureStore({
  reducer: {
    gallery: galleryReducer
  },
})