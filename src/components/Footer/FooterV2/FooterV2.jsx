import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Stack, styled,  Typography,} from '@mui/material'
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'Stacijas laukums, 4 , LV-1022, Riga, Latvija'} 
        />
        <FooterLink 
        text={'+49000000000'} 
        />
        <FooterLink 
        text={'info@uniteh24.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'buy item'} />
        <FooterLink text={'sell items'} />
        <FooterLink text={'rent items'} />
        <FooterLink text={'build items'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} href='/contact-us' />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Oven_Item_Sales'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="/categories" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="/categories"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 Uniteh24 .
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer