import { createSlice } from "@reduxjs/toolkit";

const productItemSlice = createSlice({
    name: 'productItem',
    initialState: {},
    reducers: {
        getProductItem(state, action) {
        return (
          action.payload.status === 'ERR' ?
          action.payload : { ...action.payload[0] })
        }
    }
})

export default productItemSlice.reducer;
export const { getProductItem } = productItemSlice.actions