import {
  Card,
  CardContent,
  Button,
  CardActions,
  Typography,
} from '@mui/material'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../../actions/posts'

export const AdminPost = ({ event, setCurrentId }) => {
  const date = moment(event.date).format('MMMM Do, h:mm a')
  const dispatch = useDispatch()
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (moment(event.date).fromNow().includes('ago')) {
      setDone(true)
    }
  }, [event])

  return (
    <>
      <Card
        sx={done ? { background: 'rgb(0,0,0,0.1)' } : { background: '#fff' }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setCurrentId(event._id)}>
            Edit
          </Button>
          <Button size="small" onClick={() => dispatch(deleteEvent(event._id))}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
