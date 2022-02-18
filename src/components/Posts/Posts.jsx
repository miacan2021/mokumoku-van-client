import { Post } from './Post'
import { useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'
import { CalenderTitle } from '../../style/home'

export const Posts = () => {
  const events = useSelector((state) => state.events)
  const postEvents = events.slice(0, 6)

  return !events.length ? (
    <Typography>No event Data</Typography>
  ) : (
    <>
    <CalenderTitle>Calendar of MokuMoku Vancouver</CalenderTitle>
    <Grid
      container
      spacing={2}
      sx={{
        m: 0,
        p: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (min-width: 40em)': {
          justifyContent: 'start',
        },
      }}
    >
      {postEvents.map((event) => (
        <Grid key={event._id} item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
          <Post event={event} />
        </Grid>
      ))}
    </Grid>
    </>
  )
}
