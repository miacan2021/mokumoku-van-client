import { useState } from 'react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './firebase-config'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Form from './components/Form/Form'
import { AdminPost } from './components/Posts/AdminPost'
import { Box } from '@mui/system'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Alert,
} from '@mui/material'
import { Logo } from './style/home'
import { AdminBody, AdminHeading } from './style/admin'

const Admin = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [inPage, setInPage] = useState(false)
  const [err, setErr] = useState(false)

  const [currentId, setCurrentId] = useState(null)
  const events = useSelector((state) => state.events)

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, user, password)
      await setInPage(true)
      await setUser('')
      await setPassword('')
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  const logout = async () => {
    await signOut(auth)
    await setInPage(false)
  }

  return (
    <AdminBody>
      <Box sx={{ m: 5 }}>
        <Logo>{inPage ? 'Admin Page' : 'Login Page'}</Logo>
      </Box>
      <Box
        sx={{ width: '80vw', maxWidth: 1100, m: 'auto', overflow: 'hedden' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {!inPage ? (
          <Box
            sx={{
              width: '300px',
              height: '200px',
              boxShadow: 2,
              background: '#fffffe',
              borderRadius: '5px',
              m: 3,
              p: 2,
            }}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flexDirection="column"
          >
            {err && (
              <Alert severity="error" sx={{ p: 1, m: 1, width: '100%' }}>
                Error! Please make sure your username and password.
              </Alert>
            )}
            <TextField
              label="User Name"
              variant="filled"
              value={user}
              fullWidth
              onChange={(e) => setUser(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              value={password}
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button variant="outlined" onClick={login}>
              Login
            </Button>
          </Box>
        ) : (
          <>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Container sx={{ mt: 3 }}>
              <AdminHeading>Events</AdminHeading>
              {events.length !== 0 && (
                <Grid
                  container
                  spacing={0.5}
                  sx={{ m: 'auto', width: '100%' }}
                  alignItems="center"
                  justifyContent="center"
                >
                  {events.map((event) => (
                    <Grid key={event._id} item sx={{ minWidth: 250 }}>
                      <AdminPost event={event} setCurrentId={setCurrentId} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Container>
          </>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ m: 5 }}
        >
          {inPage && (
            <Button variant="contained" onClick={logout} sx={{ mr: 1 }}>
              Logout
            </Button>
          )}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button sx={{ m: 'auto' }} variant="contained">
              Back
            </Button>
          </Link>
        </Box>
      </Box>
    </AdminBody>
  )
}

export default Admin
