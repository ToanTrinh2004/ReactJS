import React from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
function BasicTextField({Label="",type="text",value="",onChange,required , error , helperText }) {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '45ch' },
    }}
    noValidate
    autoComplete="off"
    
  >
    <TextField label={Label} type={type} value={value} onChange={onChange} required={required ?? null} helperText={helperText} error={error}  />
  </Box>
  )
}

export default BasicTextField
