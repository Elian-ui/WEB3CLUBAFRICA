import { Box, Typography } from '@mui/material'
import React from 'react'

const Mission = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"2rem"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography sx={{padding:"20px"}} variant="h3">Our mission</Typography>
            <div style={{color:"yellow",fontSize:"30px"}}>To introduce and educate communities about WEB3 and the Blockchain</div>
        </Box>
        <Box className='mission2' display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
            <div>How to</div>
            
                <div className="mission">
                    
                    <li className='mission2-text'>Webinars</li>
                    <li className='mission2-text'>Video calls</li>
                    <li className='mission2-text'>Live sessions</li>
                    <li className='mission2-text'>BootCamps</li>
                
                    
            </div>
        </Box>
    </Box>
  )
}

export default Mission