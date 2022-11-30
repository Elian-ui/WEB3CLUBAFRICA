import { Close, Menu } from '@mui/icons-material'
import { AppBar, Box, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [visib, setVisib] = useState(false)
  return (
    <Box>
      <AppBar position='sticky' sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(143,143,168,1) 100%, rgba(0,212,255,1) 100%)"}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between",flexDirection:"row", gap:"2rem"}}>
          <Box style={{fontWeight:"bolder"}}>WEB3 CLUB AFRICA</Box>
          <Box sx={{display:{xs:"none",sm:"flex"},justifyContent:"flex-end",flexDirection:"row", gap:"2rem"}}>
              
          <li className='nav' ><Link to="/" className="nav">Home</Link></li>
            <li className='nav'><Link className="nav" to="about">About</Link></li>
            <li className='nav'><Link to ="mission" className="nav"> Mission</Link></li>
            <li className='nav'><Link  to="contact" className="nav" >Contact Us</Link></li>
            </Box>
           <Box className='nav' sx={{display:{md:"none",sm:"none"}}}>{!visib?<Menu onClick={()=>{setVisib(!visib)}}/>
           :<Close onClick={()=>{setVisib(false)}} />}
           </Box>
           
           
            
        </Toolbar>
      </AppBar>

      <Box display={visib?"flex":"none"} sx={{flexDirection:"column",border:"5px",borderStyle:"groove",alignItems:"center",backgroundColor:"inherit" ,gap:"1.5rem"}}>
            <li className='nav' onClick={()=>{setVisib(!visib)}} style={{display:"flex",paddingLeft:"60%", border:"2px",borderBottom:"solid",fontSize:"20px",color:"white",paddingTop:"20px" }}><Link className="nav" to="/" >Home</Link></li>
            <li className='nav' onClick={()=>{setVisib(!visib)}} style={{display:"flex",paddingLeft:"60%", border:"2px",borderBottom:"solid",fontSize:"20px",color:"white"}}><Link className="nav" to="about" >About</Link></li>
            <li className='nav' onClick={()=>{setVisib(!visib)}} style={{display:"flex",paddingLeft:"60%", border:"2px",borderBottom:"solid",fontSize:"20px",color:"white"}}><Link className="nav" to="contact" >Contact Us</Link></li>
            <li className='nav' onClick={()=>{setVisib(!visib)}} style={{display:"flex",paddingLeft:"60%", border:"2px",borderBottom:"solid",fontSize:"20px",color:"white"}}><Link className="nav" to="mission" >Mission</Link></li>
           </Box>

    </Box>
  )
}

export default NavBar