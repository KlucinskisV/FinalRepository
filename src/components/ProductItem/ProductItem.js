import styles from './ProductItem.module.css'
import {root_url} from '../../AsyncActions/rootUrl'
import { NavLink } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice';

function ProductItem({ product }) {
    const dispatch = useDispatch()
    const { id, image, price, title, discont_price } = product
    const discount_value =  Math.floor(100 - discont_price * 100 / price)

    const handleAddToCart = (e) => {     
        e.preventDefault()
        dispatch(addToCart(product));
    }

    return (
        <NavLink to={`/products/${id}`}> 
            <div className={styles.product_item}>
                <div className={styles.product_image_wrapper}>
                    <img className={styles.product_image} src={`${root_url}${image} `} alt={title}/>
                    <Button text={'Add to cart'} 
                            defined_style={'to_cart_btn'} 
                            onClick={handleAddToCart} /> 
                </div>
                <div className={styles.product_price_list}>
                    <p className={styles.discont_price} >{discont_price !== null ? discont_price : price}$</p>
                    
                    {
                        discont_price && <p className={styles.price}>{price}$</p>
                    }
                    {
                        discont_price && <p className={styles.discount_value}>-{discount_value}%</p>
                    } 
                </div>
                <p className={styles.product_title}>{title}</p>
            </div>
        </NavLink>
    )
}

export default ProductItem;
