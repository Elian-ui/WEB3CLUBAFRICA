import { Box, Button, Container, Stack } from '@mui/material'
import React, { useState } from 'react'
import "../App.css"


const Home = () => {
    const [borderR, setBorderR] = useState("15px")
    const [divColor, setdivColor] = useState("lightblue")
    const [divheight, setdivheight] = useState("100%")
    const [containerHeight, setcontainerHeight] = useState("400px")
    const handleMouseover =()=>{
        setBorderR("40px")
        setdivColor("yellow")
        setdivheight("120%")
        setcontainerHeight("450px")
    }
    const handleMouseLeave=()=>{
        setBorderR("15px")
        setdivColor("lightblue")
        setdivheight("100%")
        setcontainerHeight("400px")
    }
  return (
    <Box   flex={5}>
        
    <div style={{display:"flex",justifyContent:"flex-end"}}>
        <img width="200px" height="200px" src="https://pbs.twimg.com/profile_images/1572894660321841152/3wXZqtla_400x400.jpg" alt="img" /></div>
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <div style={{color:"yellow", fontSize:"25px", paddingLeft:"100px"}}>We're on a mission to</div> <div style={{paddingLeft:"100px" ,color:"yellow",fontSize:"22px"}}> bring more Community Professionals into Web3</div>
        
        <div style={{paddingTop:"40px",display:"flex",justifyContent:"center",color:"white",fontSize:"25px"}}><div>Was built for educating up and coming community professionals and leaders in the web3 space</div>
        </div>
        <Stack direction={{sm:"column",md:"row"}}  justifyContent={'space-evenly'} >
            <Container  sx={{backgroundColor:"#ABE1E4", height:containerHeight,borderRadius:"10px",marginLeft:"10px",justifyContent:"center",display:"flex"}}>
            <div className='trial' style={{border:"5px",borderStyle:"double",borderRadius:borderR ,gap:"20px",backgroundColor:divColor}}>
                <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",height:divheight,alignItems:"center"}}>
                    <div style={{fontSize:"48px"}}>Join Us</div>
                    <div>Were building a community</div>
                    <div> of </div>
                    <div>developers</div>
                    <Button onClick={()=>{window.open('http://twitter.com/web3africanclub')}} sx={{margin:"30px"}} variant='contained' >Get Started on Twitter</Button></div>  
            </div>
                
            </Container>
            <Container sx={{backgroundColor:"#555758", height:containerHeight,borderRadius:"10px",marginLeft:"10px",justifyContent:"center",display:"flex"}}>
            <div className='trial' style={{border:"5px",borderStyle:"double",borderRadius:"30px" ,gap:"20px",backgroundColor:divColor}}>
                <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",alignItems:"center"}}>
                <div style={{fontSize:"48px"}}>Learn with Us</div>
                <div>Learn more about</div><div> how our Service DAO works</div><div> and let us help </div><div>grow your web3 community.</div>
                   <div> <Button onClick={()=>{window.open('http://github.com/web3clubafrica')}} sx={{margin:"30px"}} variant='contained' color='secondary' >Learn More</Button></div>  
            </div>
            </div>
                
            </Container>
            <Container sx={{backgroundColor:"HighlightText", height:containerHeight,borderRadius:"10px",marginLeft:"10px",justifyContent:"center",display:"flex"}}>
            <div className='trial' style={{border:"5px",borderStyle:"double",borderRadius:"30px" ,gap:"20px",backgroundColor:"lightblue"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",alignItems:"center"}}>
                <div style={{fontSize:"48px"}}>Get Involved</div>
                <div>Bootcamps, Workshops</div>
                <div>Oh my! Come</div> 
                <div>learn with the </div>
                <div>Web3 Community.</div>
                <div><Button sx={{margin:"30px"}} variant='contained' >Get Started</Button></div>
                </div>  
            </div>
                
            </Container>
            
        </Stack>
        <div className='theWeb3' style={{background: "linear-gradient(90deg, rgba(46,44,46,0.9640231092436975) 0%, rgba(10,12,13,1) 100%, rgba(0,212,255,1) 100%)"}}>
            <div style={{color:"ButtonFace" ,fontSize:"60px", width:"100% ",alignItems:"center", display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div> Were putting the we <div style={{color:"Highlight"}}>in Web3</div></div> 
            
            <div style={{color:"-moz-initial",fontSize:"20px",padding:"80px"}}>There is a huge demand online for Community Anything: Managers, Directors, and Leads. Even more traditionally technical positions, like Developers, are seeking Evangelists and Advocates like never before.The Web3 Community educates up-and-coming Web3 community professionals and leaders.</div>
        </div>
        </div>

        <div style={{background: "radial-gradient(circle, rgba(42,34,42,0.9640231092436975) 3%, rgba(0,0,0,0.87718837535014) 68%, rgba(52,48,42,0.7455357142857143) 89%, rgba(0,0,0,1) 100%, rgba(10,12,13,1) 100%)",}}>
            <div style={{ display:"flex",justifyContent:"center",color:"whitesmoke",fontSize:"30px",padding:"20px"}}>Goals</div>
            <Stack direction={{sm:"column",md:"row"}}>
                <Container sx={goalStyles} className='goals'>
                    <div style={titleColor}>Service DAO</div>
                    <div>We’re sourcing the most cutting edge Community building strategies, programming, integrations, and execution by coordinating a DAO.</div>
                </Container>
                <Container sx={goalStyles} className="goals">
                    <div style={titleColor}>Education</div>
                    <div>We’re designing curriculum and modules that aim to bring in the next wave of Community professionals to Ethereum and Web3.</div>
                </Container>
                <Container sx={goalStyles} className="goals">
                    <div style={titleColor}>Open Source</div>
                    <div>We’re curating the best Community humans and resources in the space. With the goal to package and share our learnings with the wider Ethereum community, as a shared consciousness of Community coordination, for others to adopt and adapt.</div>
                </Container>
            </Stack>
        </div>

        <div style={{background: "linear-gradient(90deg, rgba(42,34,42,0.9640231092436975) 0%, rgba(73,57,57,0.9556197478991597) 0%, rgba(0,0,0,1) 0%, rgba(10,12,13,1) 0%, rgba(33,33,32,0.7455357142857143) 100%)"}}>
            
        <div style={{display:"flex",justifyContent:"flex-start"}}><div style={{color:"white",fontSize:"25px",padding:"20px"}}>Get Involved</div></div>
        <div style={{color:"white",fontSize:"40px",padding:"20px"}}>
        How it Works
        <div style={{color:"white",fontSize:"20px",padding:"20px"}}>
        We’re bridging the community talent gap by…</div>
        
        <div style={{display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"white",
    fontSize:"20px",
    padding:"20px"}}><div style={titleworksStyle}>Become a contributor</div>
           
        <div>
        Join the DAO and become a contributor - fill out this intake form to get started!</div>
        <Button onClick={()=>{window.open('http://github.com/web3clubafrica')}} sx={buttonStyle} variant='contained'>Contribute</Button></div>
        </div>
    </div>
       <Box flexDirection={{xs:"column",sm:"row"}} style={{display:"flex", justifyContent:"flex-end",padding:"0px"}}>
        
        
        <div style ={{display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"white",
    fontSize:"20px",
    padding:"20px"}}><div style={titleworksStyle}>Join Us</div>
        <div>We host weekly workshops, chats and discussions around building web3 communities in Discord! Share your knowledge, or ask questions to our current community builders.</div>
        <Button sx={buttonStyle} variant='contained'>Join Us</Button>
        </div>
        <div style ={{display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"white",
    fontSize:"20px",
    padding:"20px"}}><div style={titleworksStyle}>Pickup Tasks</div>
            <div>
            Not sure where to start? Check out our bounty board and start contributing today. We're always looking for people with a wide range of skills.
            </div>
            <Button onClick={()=>{window.open('http://github.com/web3clubafrica')}} sx={buttonStyle} variant="contained">Read More</Button>
            </div>
        
       </Box>
        
    </div>
   
  
    </Box>
  )
}

const goalStyles={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    
    color:"yellow",
    fontSize:"20px"
}
const titleColor ={
    color:"white",
    fontSize:"22px"
}

const getinvolvedStyles={
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    color:"white",
    fontSize:"20px",
    padding:"20px"
}
const titleworksStyle ={
    color:"black",
    backgroundColor:"yellow",
    fontSize:"22px"
}
const buttonStyle={
    borderRadius:"15px"
}
export default Home