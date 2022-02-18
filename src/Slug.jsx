import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addMember } from './actions/posts'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Alert,
  Container,
} from '@mui/material'
import { Body, HeroP } from './style/home'
import {
  BtnContainer,
  DetailContainer,
  SlugConteiner,
  SlugHeading,
  SlugSub,
} from './style/slug'
import { Link } from 'react-router-dom'
import { AdminP, AdminSub } from './style/admin'

export const Slug = () => {
  const location = useLocation()
  const id = location.state
  let event = useSelector((state) => state.events.find((e) => e._id === id))
  const [member, setMember] = useState({ name: '', twitterId: '' })
  const [memberNum, setMemberNum] = useState(event.members.length + 1)
  const dispatch = useDispatch()
  const date = moment(event.date).format('MMMM Do, h:mm a')

  const handleSubmit = (e) => {
    e.preventDefault()
    event.members = [...event.members, member]
    dispatch(addMember(event._id, event.members))
    setMemberNum((prev) => prev + 1)
    setMember({ name: '', twitterId: '' })
  }

  return (
    <Body>
      <SlugHeading>{event.title}</SlugHeading>
      <SlugConteiner>
        <DetailContainer>
          <AdminP>
            <ReactMarkdown>{event.description}</ReactMarkdown>
          </AdminP>
          {event.map && (
            <>
              <SlugSub>Date & Venue</SlugSub>
              <AdminP>{date}</AdminP>
              <iframe
                src={event.map}
                style={{ border: 'none', width: '300px', height: '200px' }}
                title={event.title}
              ></iframe>
            </>
          )}
        </DetailContainer>
        <DetailContainer>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: 300, m: 'auto', p: 3, mb:3}}
          >
            <SlugSub>Member</SlugSub>
            <Table sx={{ maxWidth: 300, mx: 'auto' }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">TwitterID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {event.members.map((member, i) => (
                  <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center">{member.name}</TableCell>
                    <TableCell align="center">{member.twitterId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <SlugSub>Join</SlugSub>
          {memberNum <= event.limitNum ? (
            <></>
          ) : (
            <Alert severity="warning" sx={{ p: 1, m: 1, width: '70%' }}>
              Sorry! All booked.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <DetailContainer>
              <TextField
                required
                label="Name"
                name="name"
                value={member.name}
                onChange={(e) => setMember({ ...member, name: e.target.value })}
              />
              <TextField
                required
                label="Twitter ID"
                name="twitterId"
                value={member.twitterId}
                onChange={(e) =>
                  setMember({ ...member, twitterId: e.target.value })
                }
              />
              {memberNum <= event.limitNum ? (
                <Button variant="contained" type="submit">
                  submit
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  all booked
                </Button>
              )}
            </DetailContainer>
          </form>
        </DetailContainer>
      </SlugConteiner>
      <BtnContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">
          Back
        </Button>
      </Link>
      </BtnContainer>
    </Body>
  )
}
