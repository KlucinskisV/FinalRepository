import React, { forwardRef, useEffect } from 'react'
import styles from './SaleList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../ProductList/ProductList';
import { fetchAllProducts } from '../../AsyncActions/products';



const SaleList = forwardRef((props, ref) => {
    const dispatch = useDispatch()

    useEffect(() => 
        dispatch(fetchAllProducts('sale')), [dispatch])

    const products = useSelector(store => store.productList.productList)

    const discount_products = products
                                    .filter(elem => elem.discont_price)
                                    .slice ()
                                    .sort(() => Math.random() - 0.5)
                                    .slice(0, 4)
        return (
            <div ref={ref} className={styles.sale_list_section}>
                <h2 className={styles.sale_list_title}>Sale</h2>
                <ProductList products={discount_products}  showPagination={'false'}/>
            </div>
        )
})

export default SaleList













