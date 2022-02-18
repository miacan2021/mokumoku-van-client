import { useEffect } from 'react'
import { Box, Container, Button, Grid } from '@mui/material'
import { Posts } from './components/Posts/Posts'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEvents } from './actions/posts'
import flow from './flow.json'
import {
  Body,
  CalenderTitle,
  CopyRight,
  HeroHeading,
  HeroImg,
  HeroP,
  Logo,
} from './style/home'
import { CardComponent } from './components/Card'
import { FlowOder } from './style/card'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <Body>
      <Box
        sx={{ width: '80vw', maxWidth: 1100, m: 'auto' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid
          container
          sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 2,
            background: '#fffffe',
            borderRadius: '5px',
            mx: 3,
            my: 5,
            p: 2,
            overflow: 'hidden',
          }}
        >
          <Grid
            item
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media screen and (min-width: 900px)': { width: '48%' },
            }}
            xs={12}
            md={6}
          >
            <HeroImg src="hero.png" alt="hero-img" />
          </Grid>
          <Grid
            item
            sx={{
              width: '100%',
              p: 3,
              background: '#fffffe',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              '@media screen and (min-width: 900px)': { width: '48%' },
            }}
            xs={12}
            md={6}
          >
            <Logo>
              MokuMoku
              <br />
              Vancouver
            </Logo>
            <HeroHeading>Won't you join Mokumoku-kai in Vancouver?</HeroHeading>
            <HeroP>
              Mokumoku-kai is a group of participants who gather to study, work,
              or read in silence. It's held in the developer community in Japan.
              Mokumoku means "silently", Kai means "meeting". Don't you want to
              have a productive weekend? Let's join MokuMoku Vancouver!
            </HeroP>
            <FlowOder>
            <Button size="small" href='#join' sx={{p: 1, fontSize:'16px', color:'#fff', background: '#ef4565', ":hover":{color:'#ef4565'}}}>How to join?</Button>
            <Button size="small" href='#events' sx={{p: 1, fontSize:'16px', color:'#fff', background: '#ef4565', ":hover":{color:'#ef4565'}}}>Check schedule</Button>
            </FlowOder>
          </Grid>
        </Grid>
        <CalenderTitle id="join">How to join?</CalenderTitle>
        <Grid container spacing={2} sx={{
        mx: 0,
        my: 5,
        p: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          {flow.map((todo, i) => (
            <Grid item key={todo.img}>
              <CardComponent todo={todo} i={i} />
            </Grid>
          ))}
        </Grid>
        <Container id="events">
          <Posts />
        </Container>
        <Box sx={{ py: 5 }}>
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <Button sx={{ background: '#90b4ce' }} variant="contained">
              Admin Page
            </Button>
          </Link>
        </Box>
        <CopyRight>&copy; designed / created by shiho kazama.</CopyRight>
      </Box>
    </Body>
  )
}

export default App
