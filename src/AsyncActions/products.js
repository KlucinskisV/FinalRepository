import { root_url } from "./rootUrl";
import { getProductsByCategory, getProductsBySale } from "../store/reducers/productListSlice";

import { getProductItem } from "../store/reducers/productItemSlice";

export function fetchProductsByCategory(id) {
    return function (dispatch) {
        fetch(`${root_url}/categories/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getProductsByCategory(data)))
    }
}

export function fetchAllProducts(type) {
    return function (dispatch) {
        fetch(`${root_url}/products/all`)
        .then(res => res.json())
        .then(data => {
            dispatch(getProductsByCategory({ data, category: {} }))
            if (type === 'sale') {
            dispatch(getProductsBySale())
            }
        })
    }
}

export const fetchProductItem = (id) => {
    return function (dispatch) {
        fetch(`${root_url}/products/${id}`)
        .then(res => res.json())
        .then(data => dispatch(getProductItem(data)))
    }
}