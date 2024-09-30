import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './ProductItemPage.module.css'
import Button from '../../components/UI/Button/Button'
import { fetchProductItem } from '../../AsyncActions/products'
import { root_url } from '../../AsyncActions/rootUrl'
import { addToCart } from '../../store/reducers/cartSlice'


function ProductItemPage() {
  const { id } = useParams()
  const dispatch =  useDispatch()

  const productItem = useSelector(store => store.productItem)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchProductItem(id))
  }, [dispatch, id])

  if (productItem.status) {
    navigate('/*')
  }

  const {title, image, discont_price, price, description} = productItem
  
  const discount_value = Math.floor(100 - discont_price * 100 / price)

  return (
    <div className={styles.product_wrapper}>
      <h2 className={styles.product_title}>{title}</h2>
      <div className={styles.product_info}>
        <div className={styles.product_img}>
          <img  src={`${root_url}${image}`} alt={title} />
        </div>
        <div className={styles.product_info_details}>
          <div className={styles.price_wrapper}>
            <p className={styles.discount_price}>{
              discont_price !== null ? discont_price : price}<span>$</span></p>
            {
              discont_price && <p className={styles.product_price}>{price}$</p>
            }
            {
              discont_price && <p className={styles.discount_value}>-{discount_value}%</p>
            }
          </div>
          <Button text={'To cart'} 
                  defined_style={'item_to_cart_btn'}  
                  onClick = {() => dispatch(addToCart(productItem))}
          />
          <h4 className={styles.product_info_description}>Description</h4>
          <p className={styles.info_text}>{description}</p>
        </div>
      </div>
    </div >
  )
}

export default ProductItemPage