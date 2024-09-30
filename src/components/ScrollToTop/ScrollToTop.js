import React, { useState } from 'react'
import styles from './ScrollToTop.module.css'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'


export default function ScrollToTop() {

  const [showScroll, setShowScroll] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    })

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    })
  }

  return (
    <div className={styles.scroll_btn}>
      {showScroll && <BsFillArrowUpCircleFill className={styles.scroll_icon} onClick={scrollToTop} />}
    </div>
  )
}