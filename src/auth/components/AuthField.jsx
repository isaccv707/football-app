import PropTypes from 'prop-types'
import { TextField } from "@mui/material"



export const AuthField = ({label, type}) => {
  return (
    <TextField
      label={label}
      variant='outlined'
      type={type}
      sx={{ width: '25ch' }}a
    />
  )
}

AuthField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
