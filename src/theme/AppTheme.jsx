import propTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { purpleTheme } from './purpleTheme'
import { CssBaseline } from '@mui/material'

export const AppTheme = ({children}) => {
  return (
    <>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

AppTheme.propTypes ={
    children: propTypes.node.isRequired
}
