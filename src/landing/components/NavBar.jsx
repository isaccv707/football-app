import { Avatar, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-evenly'
      spacing={2}
      sx={{ alignItems: 'center', color: 'secondary.main' }}
    >
      <Grid item xs={7}>
        <Button
          component={Link}
          to='/'
          sx={{ ml: 10, color: 'secondary.main' }}
        >
          Football-app
        </Button>
      </Grid>

      <Grid item xs={1}>
        <Button
          component={Link}
          to='/nosotros'
          sx={{ color: 'secondary.main' }}
        >
          Nosotros
        </Button>
      </Grid>

      <Grid item xs={1}>
        <Button
          component={Link}
          to='/noticias'
          sx={{ color: 'secondary.main' }}
        >
          Contacto
        </Button>
      </Grid>

      <Grid item xs={1}>
        <Button
          component={Link}
          to='/contacto'
          sx={{ color: 'secondary.main' }}
        >
          Noticias
        </Button>
      </Grid>

      <Grid container xs={2} sx={{ display: 'flex',justifyContent: 'center',alignItems: 'center',mt: 2}}>
        <Grid item xs={6}>
          <Button sx={{ color: 'secondary.main' }} component={Link} to='/auth/login'>
            <Avatar
              sx={{ width: 56, height: 56, mr: 2 }}
              src='/broken-image.jpg'
            />
            <Typography sx={{ mt: 1 }}>Login</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
