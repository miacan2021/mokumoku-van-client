import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import DateTimePicker from '@mui/lab/DateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterMoment'
import FileBase from 'react-file-base64'
import { Button, Box, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { createEvent, updateEvent, addMember } from '../../actions/posts'
import { Paper, Grid } from '@mui/material'
import {
  AdminHeading,
  AdminP,
  AdminSub,
  FormFlex,
} from '../../style/admin'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const Form = ({ currentId, setCurrentId }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    limitNum: '',
    date: new Date(),
    image: '',
    map: '',
  })
  const [memberArr, setMemberArr] = useState()
  const dispatch = useDispatch()
  const event = useSelector((state) =>
    currentId ? state.events.find((e) => e._id === currentId) : null,
  )

  useEffect(() => {
    if (event) {
      setEventData(event)
      setMemberArr(event.members)
    }
  }, [event])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      dispatch(updateEvent(currentId, eventData))
    } else {
      dispatch(createEvent(eventData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setEventData({
      title: '',
      description: '',
      limitNum: '',
      date: new Date(),
      image: '',
      map: '',
    })
  }

  const delMember = (id) => {
    event.members = event.members.filter((m) => m.twitterId !== id)
    dispatch(addMember(event._id, event.members))
    setMemberArr(event.members)
  }

  return (
    <div>
      <Paper
        sx={{
          mx: 'auto',
          p: 2,
          width: '90vw',
          pb: 5,
          '@media screen and (min-width: 900px)': { p: 3,  maxWidth: 'md', },
        }}
      >
        <AdminHeading>{currentId ? 'Edit' : 'Add new'} event</AdminHeading>
        <FormFlex>
          <form onSubmit={handleSubmit} style={{ width: '100%', margin: 'auto' }}>
            <AdminSub>Form</AdminSub>
            <Grid container spacing={3} direction="column" align="center">
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  fullWidth
                  value={eventData.title}
                  onChange={(e) =>
                    setEventData({ ...eventData, title: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-textarea"
                  label="Detail"
                  multiline
                  fullWidth
                  name="description"
                  rows={4}
                  value={eventData.description}
                  onChange={(e) =>
                    setEventData({ ...eventData, description: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Place"
                  variant="outlined"
                  name="map"
                  fullWidth
                  value={eventData.map}
                  onChange={(e) =>
                    setEventData({ ...eventData, map: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FileBase
                  name="image"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setEventData({ ...eventData, image: base64 })
                  }
                  value={eventData.image}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Number of people"
                  variant="outlined"
                  name="limitNumber"
                  type="number"
                  value={eventData.limitNum}
                  onChange={(e) =>
                    setEventData({ ...eventData, limitNum: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DateTimePicker
                    label="Start Date, Time"
                    value={eventData.date}
                    renderInput={(params) => <TextField {...params} />}
                    name="date"
                    onChange={(e) => setEventData({ ...eventData, date: e })}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" sx={{ mr: 3 }}>
                  Submit
                </Button>
                <Button variant="contained" onClick={clear}>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </form>
          {currentId && (
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mx: 'auto',
              }}
            >
              <AdminSub>Members</AdminSub>
              <TableContainer sx={{ width: '80%' }}>
                <Table>
                  <TableBody>
                    {memberArr &&
                      memberArr.map((m) => (
                        <TableRow
                          key={m.twitterId}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell align="right">
                            <AdminP>{m.name}</AdminP>
                          </TableCell>
                          <TableCell align="right">
                            <Button onClick={() => delMember(m.twitterId)}>
                              <DeleteForeverOutlinedIcon />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </FormFlex>
      </Paper>
    </div>
  )
}

export default Form
