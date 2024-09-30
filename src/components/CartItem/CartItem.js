import React from 'react'
import { useDispatch } from 'react-redux';
import styles from './CartItem.module.css'
import { RxCross2 } from 'react-icons/rx'

import { decrCount, incrCount, removeFromCart } from '../../store/reducers/cartSlice';
import { root_url } from '../../AsyncActions/rootUrl';


function CartItem ({ id, title, image, count, discont_price, price }) {

    const dispatch = useDispatch();

    return (
        <div className={styles.cart_item_wrapper}>
            <img src={`${root_url}${image}`} alt={title} className={styles.cart_image} />
            <div className={styles.counter_wrapper}>
                <p className={styles.cart_item_title}>{title}</p>
                <div className={styles.counter_btn}>
                    <button onClick={() => dispatch(decrCount(id))}>-</button>
                    <p className={styles.cart_item_counter}>{count}</p>
                    <button onClick={() => dispatch(incrCount(id))}>+</button>
                </div>
            </div>
            <h2 className={styles.item_discount_price}>{discont_price ? discont_price : price}<span>$</span></h2>
            {
                discont_price && <h3 className={styles.item_price}>{price}$</h3>
            }
            <RxCross2 className={styles.close_icon} onClick={() => dispatch(removeFromCart(id))} />
        </div>
    )
}

export default  CartItem