import { Close, Menu } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Footer } from "../web3club/Footer";
//import './web3.css'
import web3club from "../logos/web3club.jpg";
import Svgs from './Svgs';

const NavBar = () => {
    const [visib, setVisib] = useState(false)
  return (
    <>
        <AppBar sx={{
            position:"sticky",
            backgroundColor:"inherit",
           height:"60px",
            borderBottom:"0.5px solid yellow"}}>
            <Toolbar sx={{justifyContent:"space-between"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
            <Box sx={{width:"50px",height:"50px"}}><Svgs /></Box>
            <Typography sx={{fontWeight:"bold"}}>Web3 Club Africa</Typography>
            </Box>
           

            <Box sx={{gap:"2rem",display:{xs:"none",md:"flex"},textTransform:"uppercase",alignItems:"center"}}>
                <Link 
                style={{
                    color:"white",
                    textDecoration:"none"
                }}
                 to = '/'><Typography>Home</Typography></Link>
                <Link style={{
                    color:"white",
                    textDecoration:"none"
                }}
                to ='about' ><Typography>About</Typography></Link>
                <Link style={{
                    color:"white",
                    textDecoration:"none",
                    fontFamily: "Jost"
                }}
                 to ='contact' >Contact</Link>
                <Button sx={{
                    
                    borderRadius:"20px",
                    border:"1.5px solid white",
                    }}>Learn More</Button>
            </Box>
            <Box className='nav' sx={{display:{md:"none",sm:"none"}}}>{!visib?<Menu onClick={()=>{setVisib(!visib)}}/>
           :<Close onClick={()=>{setVisib(false)}} />}
           </Box>
            </Toolbar>
        </AppBar>
        <Box display={visib?"flex":"none"} sx={{flexDirection:"column",border:"5px",borderStyle:"groove",alignItems:"center",backgroundColor:"inherit" ,gap:"1.5rem"}}>
            <Box sx={{
                display:{xs:"flex",sm:"none"},
                height:"60vh",
                gap:"1.5rem",
                justifyContent:"center",
                width:"100%",
                flexDirection:"column",backgroundColor:"inherit"}}>
                
                
                   <Link 
                   onClick={()=>(setVisib(!visib))}
                style={{
                    color:"white",
                    textDecoration:"none",
                    fontWeight:"bold",
                    fontSize:"24px",
                    borderBottom:"1px solid white",
                    display:"flex",
                }}
                 to = '/'>Home</Link>
                <Link style={{
                    color:"white",
                    textDecoration:"none",
                    fontWeight:"bold",
                    fontSize:"24px",
                    borderBottom:"1px solid white",
                    display:"flex",
                }}
                onClick={()=>(setVisib(!visib))}
                to ='about' >About</Link>
                <Link style={{
                    color:"white",
                    textDecoration:"none",
                    fontWeight:"bold",
                    fontSize:"24px",
                    borderBottom:"1px solid white",
                    display:"flex",
                }}
                onClick={()=>(setVisib(!visib))}
                 to ='contact' >Contact</Link>
                <Button 
                onClick={()=>(setVisib(!visib))}
                sx={{
                    
                    borderRadius:"20px",
                    border:"1.5px solid white",
                    }}>Learn More</Button>
                    {/* <Footer /> */}
                
            
                
            </Box>

    </Box>
  </>
  )
}

export default NavBar