import { GitHub, Telegram, Twitter } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Svgs from './Svgs'

const Footer = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <Box sx={{maxWidth:"100%",minWidth:"80%",gap:"4rem",padding:"20px",border:"1px solid white",borderRadius:"5px",display:"flex",flexDirection:{xs:"column",sm:"row"}}}>
        <Box sx={{gap:"2rem",display:"flex",flexDirection:"column",alignItems:"center",width:{sm:"50%"}}}>
            <Box sx={{width:"100px",height:"100px"}}><Svgs /></Box>
            <Typography>WEB3CLUB AFRICA FOUNDATION</Typography>
            
            <Box sx={{display:"flex",justifyContent:"space-around ",width:"80%"}}>
            <Twitter onClick={()=>{window.open('http://twitter.com/web3africanclub')}} style={{cursor:"pointer"}}/>
            <Telegram onClick={()=>{window.open('http://t.me/web3clubafrica')}} style={{cursor:"pointer"}}/>
            <GitHub onClick={()=>{window.open('http://github.com/web3clubafrica')}} style={{cursor:"pointer"}}/>
            </Box>
        </Box>
        <Box sx={{display:"flex",borderBottom:"0.5px solid yellow",width:{sm:"50%"}}}>
            <Box sx={{display:"flex",flexDirection:"column",width:"50%"}}>
                <Typography>GET CONNECTED</Typography>
                <Button>Seminars</Button>
                <Button>Webinar</Button>
                <Button>Sessions</Button>
                <Button>Tours</Button>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",width:"50%"}}>
                <Typography>CONTRIBUTE</Typography>
                <Button>News Letter</Button>
                <Button>Projects</Button>
            </Box>
        </Box>
        </Box>
        <Box sx={{paddingTop:"20px",paddingBottom:"40px"}}>
            <Typography sx={{fontSize:"15px"}}>&#169; 2022 Web3 Club Africa. All rights reserved.</Typography>
        </Box>
    </Box>
  )
}

export default Footer