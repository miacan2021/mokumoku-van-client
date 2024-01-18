import { useState, useEffect } from 'react'
import { Post } from './Post'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'

import { CalenderTitle } from '../../style/home'
import { SkeltonCard } from './SkeltonCard'

export const Posts = () => {
  const events = useSelector((state) => state.events)
  const [haveEventsData, setHaveEventsData] = useState(false)
  const postEvents = events.slice(0, 6)

  useEffect(() => {
    if (events.length) {
      setHaveEventsData(true)
    }
  }, [events.length])

  return (
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
        {haveEventsData ? (
          postEvents.slice(0, 3).map((event) => (
            <Grid key={event._id} item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
              <Post event={event} />
            </Grid>
          ))
        ) : (
          <>
            <Grid item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
              <SkeltonCard />
            </Grid>
            <Grid item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
              <SkeltonCard />
            </Grid>
            <Grid item sm={12} md={6} lg={4} sx={{ mb: 2 }}>
              <SkeltonCard />
            </Grid>
          </>
        )}
      </Grid>
    </>
  )
}
