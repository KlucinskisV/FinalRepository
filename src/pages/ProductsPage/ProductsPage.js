import React, { useEffect } from 'react'
import styles from './ProductsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import Filter from '../../components/Filter/Filter'
import ProductList from '../../components/ProductList/ProductList'
import { getProductsBySale } from '../../store/reducers/productListSlice'
import { fetchAllProducts, fetchProductsByCategory } from '../../AsyncActions/products'


function ProductsPage({ type, style }) {
    const dispatch = useDispatch()
    const { id } = useParams()

    const titlePage = useSelector(store => store.productList.titlePage)
    const productList = useSelector(store => store.productList.productList).filter(elem => elem.showBySale && elem.showByInterval)

    useEffect(() => {
        window.scrollTo(0, 0);
        if (type === 'category') {
            dispatch(fetchProductsByCategory(id))
        } else {
            dispatch(fetchAllProducts(type))
            if (type === 'sale') {
            dispatch(getProductsBySale())
            }
        }
        }, [id, type, dispatch])

    return (
        <div className={styles.products_list}>
            <h2 className={styles.products_page_title}>{titlePage.title}</h2>
            <Filter type={type} style={style}/>
            <ProductList   products={productList} />
        </div>
    )
}

export default ProductsPage

