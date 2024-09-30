import React from 'react'
import styles from './CategoryItem.module.css'
import {root_url} from '../../AsyncActions/rootUrl'

function CategoryItem({title, image}) {

    return (
        <div className={styles.category_item}>
            <img src={`${root_url}${image}`} alt={title} className={styles.category_image} />
            <h3 className={styles.category_title}>{title}</h3>
        </div>
    )
}

export default CategoryItem

