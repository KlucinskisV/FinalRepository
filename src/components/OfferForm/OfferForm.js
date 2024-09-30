import React, { useState } from 'react'
import styles from './OfferForm.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import { useForm } from 'react-hook-form'
import ModalWindow from '../ModalWindow/ModalWindow'
import { send_discount_request } from '../../AsyncActions/order'



function OfferForm() {

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
        console.log(data);
        send_discount_request()
        setModalActive(true)
        document.body.style.overflow = 'hidden';
        reset()
	}

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={styles.offer_form_wrapper}>
            <p className={styles.offer_form_wrapper_title}>5% off </p>
            <p className={styles.offer_form_wrapper_conditions}>on the first order</p>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div>
                    {
                        errors.phone && <p className={`${styles.warning_text} ${errors.phone && styles.active}`}>{errors.phone.message}</p>

                    }
                </div>
                <Input defined_style={'discount_input'} 
                        type={'phone'} 
                        placeholder={'+49'} 
                        name={'phone'} 
                        phoneInp={phoneInp}
                />
                <Button defined_style ={'discount_btn'} 
                        text ={'Get a discount'} />
            
            </form>

            <ModalWindow    modalActive={modalActive}
                            setModalActive={setModalActive}
                            cong_text={'Phone number is registered!'}
                            follow_text={'Your discount will be applied to your first order.'}
            />
        </div> 
    )
}

export default OfferForm