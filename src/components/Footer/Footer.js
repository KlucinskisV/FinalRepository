import React from 'react'
import styles from './Footer.module.css'
import Contacts from '../Contacts/Contacts'

function Footer() {
    return (
        <div className={styles.footer_section}>
            <Contacts />
                <div className={styles.map}>
                <iframe title='googleMaps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12307.36018213144!2d24.120599104333866!3d56.95472115233624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd35aa0515b%3A0x172b0fe2c5d23408!2sOrigo!5e0!3m2!1slv!2slv!4v1726754661853!5m2!1slv!2slv">
                </iframe>
            </div>
        </div>
    )
}

export default Footer
