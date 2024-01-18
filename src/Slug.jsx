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
  Modal,
} from '@mui/material'
import { Body } from './style/home'
import {
  BtnContainer,
  DetailContainer,
  SlugConteiner,
  SlugHeading,
  SlugSub,
} from './style/slug'
import { Link } from 'react-router-dom'
import { AdminP } from './style/admin'
import remarkGfm from 'remark-gfm'

export const Slug = () => {
  const location = useLocation()
  const id = location.state
  let event = useSelector((state) => state.events.find((e) => e._id === id))
  const [member, setMember] = useState({ name: '', twitterId: '' })
  const [memberNum, setMemberNum] = useState(event.members.length + 1)
  const dispatch = useDispatch()
  const date = moment(event.date).format('MMMM Do, h:mm a')
  const [showThankYou, setShowThankYou] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    event.members = [...event.members, member]
    dispatch(addMember(event._id, event.members))
    setMemberNum((prev) => prev + 1)
    setMember({ name: '', twitterId: '' })
    setShowThankYou(true)
    setTimeout(() => {
      setShowThankYou(false)
    }, 3000)
  }

  return (
    <Body>
      <SlugHeading>{event.title}</SlugHeading>
      <SlugConteiner>
        {showThankYou ? (
          <Modal
            open={showThankYou}
            onClose={() => setShowThankYou(false)}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Alert severity="success" color="info">
              Thank you for booking!
            </Alert>
          </Modal>
        ) : (
          <></>
        )}
        <DetailContainer>
          <AdminP>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {event.description}
            </ReactMarkdown>
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
            sx={{ maxWidth: 250, m: 'auto', p: 3, mb: 3 }}
          >
            <SlugSub>Member up to {event.limitNum}</SlugSub>
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
          <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
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
                <Button
                  sx={{
                    m: 1,
                    color: '#ffff',
                    background: '#ef4565',
                    ':hover': { color: '#ffff', background: '#ef4565' },
                  }}
                  variant="contained"
                  type="submit"
                >
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
          <Button
            sx={{ background: '#094067', ':hover': { background: '#90b4ce' } }}
            variant="contained"
          >
            Back
          </Button>
        </Link>
      </BtnContainer>
    </Body>
  )
}
