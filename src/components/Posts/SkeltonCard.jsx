import React from 'react'
import {Skeleton, Card } from '@mui/material'

export const SkeltonCard = () => {
  return (
    <Card
    sx={{
      minWidth: 300,
      maxWidth: 345,
      minHeight: 290,
      maxHeight: 400,
      m: 'auto',
      background: '#fff',
    }}
  >
    <Skeleton variant="rectangular" height={140} />
      <Skeleton animation="wave" width={'30%'} sx={{ m: 2 }} />
      <Skeleton animation="wave" width={'90%'} sx={{ m: 2 }} />
    <Skeleton animation="wave" width={'90%'} sx={{ m: 2 }} />
  </Card>
  )
}
