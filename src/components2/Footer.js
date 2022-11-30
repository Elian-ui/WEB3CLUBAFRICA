import { GitHub, Telegram, Twitter } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'


const Footer = () => {
    return (
    <Box flexDirection={{xs:"column",sm:"row"}} sx={{padding:"100px",gap:"2rem",display:"flex",justifyContent:"space-around",alignItems:"center",color:"white"}}>
        
        <Button onClick={()=>{window.open('http://twitter.com/web3africanclub')}} variant='contained' startIcon={<Twitter />}>Twitter</Button>
        <Button onClick={()=>{window.open('http://t.me/web3clubafrica')}} variant="contained" startIcon={<Telegram />}>Telegram</Button>
        <Button onClick={()=>{window.open('http://github.com/web3clubafrica')}} variant="contained" sx={{backgroundColor:"darkgray"}} startIcon={<GitHub />}>Github</Button>

    </Box>
  )
}

export default Footer