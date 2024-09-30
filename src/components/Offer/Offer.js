import React from 'react'
import styles from './Offer.module.css'
import OfferForm from '../OfferForm/OfferForm'
import item from './images/Senza titolo.png'

function Offer() {
    return (
        <div className={styles.offer_section}> 
            <div className={styles.offer_wrapper}>
                <div className={styles.offer_image}>
                    <img src={item} alt='item'></img>
                </div>
                <div className={styles.offer_conditions}>
                    <OfferForm />  
                </div>
            </div>
        </div>
    )
}

export default Offer