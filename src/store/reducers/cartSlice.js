import { createSlice } from "@reduxjs/toolkit";

const storage = JSON.parse(localStorage.getItem('cart'));
const updateLocalStorage = (copyState) => localStorage.setItem('cart', JSON.stringify(copyState))

const checkProduct = (state, payload) => {
const productInState = state.find(el => el.id === payload.id)
    if (productInState) {
        productInState.count++
    } else {
        state.push({ ...payload, count: 1 })
    }
    }

    const cartSlice = createSlice({
    name: 'cart',
    initialState: storage ? storage : [],
    reducers: {
        addToCart(state, action) {
        checkProduct(state, action.payload);
        updateLocalStorage(state)
        },

        incrCount(state, action) {
        state.find(elem => elem.id === action.payload).count++;
        updateLocalStorage([...state])
        },

        decrCount(state, action) {
        const target = state.find(elem => elem.id === action.payload)
        if (target.count > 1) {
            target.count--
        } else {
            return state.filter(elem => elem.id !== action.payload)
        }
        updateLocalStorage([...state])
        },

        removeFromCart(state, action) {
        state = state.filter(elem => elem.id !== action.payload)
        updateLocalStorage(state);
        return state
        },

        clearCart(state) {
        state = []
        updateLocalStorage(state);
        return state
        }
    }
})

export default cartSlice.reducer
export const { addToCart, incrCount, decrCount, removeFromCart, clearCart } = cartSlice.actions