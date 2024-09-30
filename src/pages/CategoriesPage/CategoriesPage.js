import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesList from '../../components/CategoriesList/CategoriesList'
import { fetchCategoriesList } from '../../AsyncActions/categories'



function CategoriesPage() {
    const dispatch = useDispatch()
    const categories = useSelector(store => store.categories)

    useEffect(() => { 
        window.scrollTo(0, 0)
        dispatch(fetchCategoriesList())
    }, [dispatch])

    return (
        <div>
            <CategoriesList categories={categories} title={'Categories'} show_btn={false} />
        </div>
    )
}

export default CategoriesPage

