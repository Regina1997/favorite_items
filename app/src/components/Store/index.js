import {
  configureStore
} from '@reduxjs/toolkit';
import itemReducer from '../../Pages/itemSlice';
import popupReducer from '../Popup/popupSlice';
import pagesReducer from '../../Pages/pagesSlice';
import screenReducer from '../../Pages/screenSlice'

const store = configureStore({
  reducer: {
    items: itemReducer,
    popup: popupReducer,
    pages: pagesReducer,
    screen: screenReducer
  }
})

export default store;