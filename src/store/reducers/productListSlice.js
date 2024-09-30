import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        titlePage: {},
        productList: []
    },
    reducers: {

        getProductsByCategory(state, action) {
        if (action.payload.status) {
            alert(action.payload.message);
            return {
                titlePage: { title: '' },
                productList: []
            }
        } else if (action.payload.category.title) {
            return {
                titlePage: action.payload.category,
                productList: action.payload.data.map(elem => ({ ...elem, showBySale: true, showByInterval: true }))
            }
        } else {
            return {
                titlePage: { title: 'All products' },
                productList: action.payload.data.map(elem => ({ ...elem, showBySale: true, showByInterval: true }))
            }
        }
        },

        getProductsBySale(state, action) {
            return {
                titlePage: { title: 'Products with sale' },
                productList: state.productList.filter(elem => elem.discont_price).map(elem => ({ ...elem, showBySale: true, showByInterval: true }))
        }
        },

        filterProductsByPrice(state, action) {
            let { from, to } = action.payload;
            if (to === '' || to === 0) {
                to = Infinity;
            }
            if (from === '') {
                from = -Infinity;
            }
            return {
                ...state, productList: [...state.productList].map(elem => ({
                ...elem, showByInterval:
                                        (elem.discont_price ? elem.discont_price : elem.price) >= from
                                        && (elem.discont_price ? elem.discont_price : elem.price) <= to
                })
                )
            }
        },

        filterProductsBySale(state, action) {
            state = {
                ...state,
                productList: state.productList.map(elem => {
                                                            if (elem.discont_price === null) {
                                                                elem.showBySale = !action.payload
                                                            }                                                      return elem
                                                            })
            }
        },

        sortProductsByDefault(state, action) {
            return { ...state, 
                    productList: [...state.productList].sort((a, b) => a.id - b.id) 
            }
        },

        sortProductsByTitleA(state, action) {
            return { ...state, 
                    productList: [...state.productList].sort((a, b) => a.title.localeCompare(b.title)) 
            }
        },
    
        sortProductsByTitleZ(state, action) {
            return { ...state, 
                    productList: [...state.productList].sort((a, b) => b.title.localeCompare(a.title)) 
            }
        },

        sortProductsByPriceDesc(state, action) {
            return { ...state, 
                    productList: [...state.productList].sort((a, b) => (b.discont_price ? b.discont_price : b.price) - (a.discont_price ? a.discont_price : a.price)) 
            }
        },

        sortProductsByPriceAsc(state, action) {
            return { ...state, 
                productList: [...state.productList].sort((a, b) => (a.discont_price ? a.discont_price : a.price) - (b.discont_price ? b.discont_price : b.price)) 
            }
        },
    }
})

export default productListSlice.reducer
export const {
  getProductsByCategory,
  getProductsBySale,
  filterProductsByPrice,
  filterProductsBySale,
  sortProductsByDefault,
  sortProductsByTitleA,
  sortProductsByTitleZ,
  sortProductsByPriceDesc,
  sortProductsByPriceAsc

} = productListSlice.actions