import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

export const LandingLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{
          display: 'flex',
          backgroundColor: 'primary.main',
          alignItems: 'center',
          padding: 2
        }}
      >
        <NavBar />
      </Box>
      <Box sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'primary.main',
          alignItems: 'center',
          padding: 2
        }}
      >
        <Footer />
      </Box>
    </Box>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired
}
