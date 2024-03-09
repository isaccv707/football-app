import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'




export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const {status} = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === 'checking', [status]);

  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log({ data })
    // dispatch(checkingAuthentication(data));
    dispatch(startCreatingUserWithEmailPassword(data));
  }

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 3 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography variant='h3' sx={{ color: 'primary.main' }}>
            Register
          </Typography>

          <Box
            onSubmit={handleSubmit(onSubmit)}
            component='form'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              backgroundColor: '#FFFFFF',
              padding: 5,
              borderRadius: 0
            }}
          >
            <TextField
              label='Name'
              type='text'
              variant='outlined'
              sx={{ width: '25ch' }}
              {...register('displayName', { required: true, minLength: 3, maxLength: 20,pattern: /^[A-Za-z]+$/i})}
              {...errors.name && { error: true, helperText: 'Invalid name' }}
            />
            <TextField
              label='Gmail'
              type='email'
              variant='outlined'
              sx={{ width: '25ch' }}
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              {...errors.email && { error: true, helperText: 'Invalid email' }}
            />
            <TextField
              label='Password'
              type='password'
              variant='outlined'
              sx={{ width: '25ch' }}
              {...register('password', {required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/})}
              {...errors.password && {error: true, helperText: 'Invalid password'}}
            />
            {/* <TextField
              label='Confirm Password'
              type='password'
              variant='outlined'
              sx={{ width: '25ch' }}
              {...register('password', {required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/})}
              {...errors.confirmPassword && {error: true, helperText: 'Invalid password'}}
            /> */}

            <Button disabled={isChecking} variant='contained' sx={{ width: '25ch' }} type='submit'>
              Register
            </Button>

            <Typography variant='body1' sx={{ mt: 2, color: 'primary.main' }}>
              Already have an account?
              <Button color='secondary' component={Link} to='/auth/login'>
                Login
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
