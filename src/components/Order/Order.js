import React, { useEffect, useState } from 'react'
import styles from './Order.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { useForm } from 'react-hook-form'
import ModalWindow from '../ModalWindow/ModalWindow'
import { send_order } from '../../AsyncActions/order'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../store/reducers/cartSlice'



function Order() {
  useEffect(() => window.scrollTo(0, 0), [])

  const cart = useSelector(store => store.cart)

  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false)

  const total_order = +cart.reduce((accum, elem) => accum + elem.count * (elem.discont_price ? elem.discont_price : elem.price), 0).toFixed(2)

  const {
		register,
		handleSubmit,
		formState: { errors },
    reset
	} = useForm({mode: 'all'})

  const phoneInp = register('phone', {
		required: 'Field is required',
		pattern: {
		value: /[+]{1}[0-9]{11}/,
		message: 'invalid phone format',
		}
	})

  const onSubmit = (data) => {
    send_order()
    setModalActive(true)
    document.body.style.overflow = 'hidden';
    reset()
    dispatch(clearCart())
	}

    return (
      <div className={styles.order_wrapper}>
        <h2 className={styles.order_title}>Order details</h2>
          <div className={styles.order_total}>
            <p className={styles.order_text}>Total</p>
            <p className={styles.order_total_sum}>{total_order}<span> $</span></p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {
                errors.phone && <p className={`${styles.warning_text} ${errors.phone && styles.active}`}>{errors.phone.message}</p>

              }
            </div>
              <Input  defined_style={'order_input'} 
                      type={'phone'} 
                      placeholder={'Phone number'}
                      pattern={'[+]{1}[0-9]{11}'}
                      name={'phone'} 
                      phoneInp={phoneInp}
              />
              <Button text={'Order'} 
                      defined_style={'order_btn'}
                      disabled ={cart.lenght === 0 ? true : false}
                        
              />
          </form>
          <ModalWindow    modalActive={modalActive}
                          setModalActive={setModalActive}
                          cong_text={'Your booking has been confirmed!'}
                          follow_text={'Please wait for order details via SMS.'}
          />
      </div>
    )
}

export default Order