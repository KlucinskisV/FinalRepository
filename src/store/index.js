import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categoriesSlice';
import productListSlice from './reducers/productListSlice';
import cartSlice from './reducers/cartSlice';
import productItemSlice from './reducers/productItemSlice';


const rootReducer = combineReducers({
    
  categories: categoriesSlice,
  productList: productListSlice,
  productItem: productItemSlice,
  cart: cartSlice,
})

export const store = configureStore({
  reducer:rootReducer
})