import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers: {
      getCategoriesList(state, action) {
      return  [...action.payload]
      }
    }
})

export default categoriesSlice.reducer
export const { getCategoriesList } = categoriesSlice.actions