import React from 'react'
import styles from './Button.module.css'

function Button({ text, defined_style, ...otherProps }) {
    return (
        <button className={`${styles[defined_style]}`} {...otherProps}>{text}</button>
    )
}

export default Button