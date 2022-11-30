import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Gallery = () => {
    const data = axios.get('https://jsonplaceholder.typicode.com/photos')   
  return (
    <Box sx={{display:"flex",minHeight:"60vh"}}>
    <Box sx={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Typography>Side bar</Typography>
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <Button>Catalogue 1</Button>
        <Button>Catalogue 1</Button>
        <Button>Catalogue 1</Button>
    </Box>
    </Box>

    <Box sx={{width:"70%"}}><Typography>Main</Typography></Box>
    </Box>
  )
}

export default Gallery