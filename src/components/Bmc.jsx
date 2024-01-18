import { Container } from '@mui/material'
import React from 'react'
import { BmcCup } from '../style/bmc'

const Bmc = () => {
  return (
    <Container
      id="bmc"
      sx={{
        background: '#fff',
        padding: '5px',
      }}
    >
      <h1>Support Students!</h1>
      <h3>Buy me a coffee</h3>
      <p>You can support students</p>
      <p>Thanks for your Supporters!</p>
      <BmcCup src="/bmc-cup.png" alt="bmc-cup" />
      <p>+1500! Thanks!!</p>
    </Container>
  )
}

export default Bmc
