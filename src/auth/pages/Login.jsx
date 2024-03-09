import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { Google } from '@mui/icons-material';
import { useEffect, useMemo } from 'react';


export const Login = () => {

  const {register, handleSubmit, formState: {errors},} = useForm();

  const {status, errorMessage} = useSelector((state) => state.auth);

  const isChecking = useMemo(() => status === 'checking', [status]);
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log({data});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  useEffect(() => {
    if(status === 'authenticated') 
    navigate('/dashboard/home');
  }, [status, navigate])
  
  
  
  
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
            Login
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              mt: 2,
              backgroundColor: '#FFFFFF',
              padding: 5,
              borderRadius: 0
            }}
          >
            <TextField
              label={'Email'}
              type={'email'}
              variant='outlined'
              autoComplete='current-email'
              sx={{ width: '25ch' }}
              {...register('email', {required: true, pattern: /^\S+@\S+$/i})}
              {...errors.email && {error: 'true', helperText: 'Invalid email'}}
            />

            <TextField
              label={'Password'}
              variant='outlined'
              type={'password'}
              autoComplete='current-password'
              sx={{ width: '25ch' }}
              {...register('password', {required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/})}
              {...errors.password && {error: 'true', helperText: 'Invalid email'}}
            />
           {errorMessage? 
              <Typography variant='body1' sx={{ mt: 2, color: 'error' }}>
                  {errorMessage}
              </Typography> : null
            }
            <Button disabled={isChecking} variant='contained' type='submit' sx={{ width: '25ch' }}>
              Login
            </Button>
            <Button disabled={isChecking} variant='contained' type='submit' sx={{ width: '25ch' }} onClick={onGoogleSignIn}>
              <Google sx={{mr:1}}/>
              Login with Google
            </Button>
          </Box>
          <Typography variant='body1' sx={{ mt: 2, color: 'primary.main' }}>
            Dont have an account?
            <Button color='secondary' component={Link} to='/auth/register' type='submit'>
              Register
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
