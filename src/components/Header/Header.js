import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button'
import {SlHandbag} from 'react-icons/sl'
import CounterCart from '../CounterCart/CounterCart'
import MobileIcon from '../MobileIcon/MobileIcon'
import logo from './assets/logo-uniteh24.png';
import BtnDarkMode from '../../components/btnDarkMode/BtnDarkMode'


function Header({activeMenu, setActiveMenu}) {

    return (
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <NavLink to='/'><img src={logo} alt='logo'></img></NavLink>
            <NavLink to='/categories'>
              <Button text ={'Catalog'} 
                      defined_style={'header_btn'} />
            </NavLink>
        </div>
        <div className={styles.nav_menu}> 
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>All Products</NavLink>
          <NavLink to='/sales'>All sales</NavLink>
        </div> 
        <div className={styles.nav_cart}>
          <NavLink to='/cart'><SlHandbag className={styles.cart_icon} /></NavLink>
            <CounterCart />
          
        </div>
         <BtnDarkMode />
        <MobileIcon activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
    )
}

export default Header

