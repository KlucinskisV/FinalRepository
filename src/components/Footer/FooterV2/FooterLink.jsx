import { Link } from '@mui/material'

import React from 'react'

const FooterLink = ({ text }) => {
  return (
    <Link 
    href='/categories'
    variant='p'
    component='a'
    sx={{
      fontSize: '0.9rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#414141',
      textTransform: 'Uppercase',
      "&:hover": {
        color: '#1c2859',
      }
    }}
    >
      {text}
 
    </Link>
  )
}

export default FooterLink