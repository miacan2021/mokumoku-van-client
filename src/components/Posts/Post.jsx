import { useEffect, useState } from 'react'
import { CardMedia, Card, Button, CardActions } from '@mui/material'
import moment from 'moment'
import { Link } from 'react-router-dom'
import {
  PostContent,
  PostDate,
  PostDay,
  PostMonth,
  PostTag,
  PostTitle,
} from '../../style/post'

export const Post = ({ event }) => {
  const date = moment(event.date).format('MMMM Do, h:mm a')
  const [allBooked, setAllBooked] = useState(false)
  const fromStartDate = moment(event.date).fromNow()
  const [tag, setTag] = useState('')
  const month = date.split(' ')[0].slice(0, 3)
  const day = date.split(' ')[1].slice(0, -3)

  console.log(fromStartDate)
  useEffect(() => {
    if (fromStartDate.includes('ago')) {
      setTag('past')
    } else {
      setTag('future')
    }
    if (event.members.length >= event.limitNum) {
      setAllBooked(true)
    }
  }, [event, fromStartDate])

  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 345,
          minHeight: 290,
          maxHeight: 400,
          m: 'auto',
          background: tag === 'past' ? 'rgb(0,0,0,0.1)' : '#fff',
        }}
      >
        <CardMedia
          component="img"
          alt="event image"
          height="140"
          image={event.image ? event.image : 'no-img.jpg'}
          sx={{ background: '#0000', opacity: tag === 'past' ? 0.5 : 1 }}
        />
        <PostContent>
          <PostDate>
            <PostMonth>{month}</PostMonth>
            <PostDay>{day}</PostDay>
          </PostDate>
          <PostTitle>{event.title}</PostTitle>
        </PostContent>
        <CardActions
          sx={{
            my: 2,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: allBooked ? 'space-between' : 'flex-end',
          }}
        >
          {allBooked && <PostTag>All booked!</PostTag>}
          <Link
            to={`/${event._id}`}
            state={event._id}
            style={{ textDecoration: 'none' }}
          >
            <Button
              size="small"
              sx={{
                color: '#ffff',
                background: '#ef4565',
                ':hover': { color: '#ffff', background: '#ef4565' },
              }}
            >
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}
