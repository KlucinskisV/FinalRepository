import React from 'react'
import styles from './Input.module.css'

    
function Input({placeholder, type, name, defined_style,  pattern, phoneInp, ...otherProps}) {
    return (
        <input  className={`${styles.input} ${styles[defined_style]}`} 
                type={type} 
                placeholder={placeholder} 
                name={name}  
                pattern={pattern} 
                {...phoneInp} 
                {...otherProps}/>
    )
}

export default Input