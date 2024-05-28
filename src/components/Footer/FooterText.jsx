import { Typography } from '@mui/material'
import React from 'react'

const FooterText = ({ text, capitalize = true }) => {
  return (
    <Typography 
    variant='p'
    component='a'
    sx={{
      fontSize: '0.9rem',
      fontWeight: '400',
      textDecoration: 'none',
      color: '#414141',
      textTransform: capitalize ? 'capitalize' : 'none',
    }}
    >
      {text}
    </Typography>
  )
}

export default FooterText