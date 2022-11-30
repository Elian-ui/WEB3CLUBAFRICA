import { Box, ListItem, Typography } from '@mui/material'
import React from 'react'
import AliceCarousel from "react-alice-carousel";
import elian from "../images/elian2.jpg"
import davis from "../images/davis2.jpg";
import zeus from "../images/zeus2.jpg"
import shiddy from "../images/shiddy2.jpg";



const About = () => {
  const users=[{
    Name:"Elian Mwesiga",
    image:elian,
    Description:["Software Developer ", "Web3 Expert","DAO expertise"],
    Contact:"mwesigaelian",
    message:"Web3 users aren't just customers but they are a community and a core part of the product.Community managers enable you to attract believers to your project and engage them until they automatically become brand ambassadors. Unlike web2 where you spend so much effort to attract customers for the sole purpose of selling to them, web3 community managers help you nurture your user base and turn them into an army of free marketers for your project."
  },
  {Name:"Davis",
  Description:["Crypto consultant","Crypto trader","Flutter Geek"],
  image:davis,
  Contact:"davisrau1999",
  message:"Today's connected technology exponentially changes our boundaries for community.Web 3.0 is the third generation of the Internet. It’s a data-driven version of the Web that consists of content and services created by various individuals. The goal is to make every process in the digital system more intelligent, open and decentralized.Web3 is establishing a decentralized, digital highway for people to connect on their own terms to form communities that fit their needs & beliefs."
},
  {Name:"Mwesigye Joseph",
  Description:["Flutter dev","React dev","Web3 expert"],
  image:zeus,
  Contact:"mwesigyejosephug0",
  message:"Since its inception, the Internet has evolved at an increasingly fast pace. It has transformed into a digital avenue for all kinds of activities for users and organizations. These vary from leisure and entertainment to monetary transactions.With the surge of Bitcoin and other virtual currencies, “Web 3.0” has become a common term thrown into conversations. If you are one of those who have heard the term a hundred times but are unfamiliar with what it actually means, stay tuned "
},
  {Name:"Abraham Mugisha Shidi",
  Description:["Web3 expert","Crypto Trader","Consultant"],
  image:shiddy,
  Contact:"mwesigyejosephug0",
  message:"An engaged community helps us better our products with their feedback, add more features based on their needs, and onboard more people onto Web3. The technology that powers Web3, blockchain, itself has the idea of the collective built in. If miners would not reach a consensus about the validity of a transaction, it wouldn’t be added to the chain, and therefore not exist. With that we have to engage the masses in the Web3 community and spread the importance"
}
]

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 1,
  },
};

  const items=users.map((user)=>{
    return<div key={user.Name}>{<Box sx={{background:"linear-gradient(90deg, rgba(42,34,42,0.9640231092436975) 0%, rgba(0,0,0,1) 0%, rgba(10,12,13,1) 0%, rgba(17,27,21,0.9416141456582633) 100%, rgba(33,33,32,0.7455357142857143) 100%);",gap:"1.2rem",display:"flex",flexDirection:"column",alignItems:"center",borderStyle:"double",borderRadius:"10px"}}>
    <div style={{color:"white",fontSize:"24px",padding:"20px",lineHeight:"40px",fontWeight:"200"}}>{user.message}</div>
    <img style={{borderRadius:"500px",width:"100px",height:"100px",paddingTop:"10px"}} alt={user.Name} src={user.image}/>
    <div style={{color:"orange",fontFamily:"monospace"}}>{user.Name}</div>
    <div style={{color:"white"}}>{user.Description.map((roles,index)=>{
      return <div key={index}>{roles}</div>
    })}</div>
    <div style={{color:"yellow",textAlign:"right",marginBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}><div>{user.Contact}</div><div>@gmail.com</div></div>
    </Box>}
    
    </div>
  })

  return (
    <Box display="flex" alignItems={"center"} flexDirection={"column"}>
      <Typography sx={{padding:"40px"}}variant="h3">About us</Typography>
      
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={15000}
        disableButtonsControls
        autoPlay
        responsive={responsive}
        items={items}
      />
    
    <Box display="flex" alignItems={"center"}  flexDirection={{xs:"column",md:"row"}} gap={4}>
        
      {/* {users.map((user)=>{
        return<div key={user.Name}>{<Box sx={{gap:"1.2rem",display:"flex",flexDirection:"column",alignItems:"center",borderStyle:"double",borderRadius:"10px"}}>
        
        <img style={{borderRadius:"500px",width:"200px",height:"200px",paddingTop:"10px"}} src={user.image}/>
        <div style={{color:"orange",fontFamily:"monospace"}}>{user.Name}</div>
        <div style={{color:"white"}}>{user.Description.map((roles,index)=>{
          return <div key={index}>{roles}</div>
        })}</div>
        <div style={{color:"yellow",textAlign:"right",marginBottom:"10px"}}>{user.Contact}</div>
        </Box>}
        
        </div>
      })} */}
      
        </Box>
        <div style={{paddingTop:"40px",fontFamily:"sans-serif",fontSize:"20px",fontWeight:"bolder",color:"yellow",fontStyle:"italic"}}>A Team determined to extend awareness about Web3</div>
        
          <div style={{fontSize:"24px"}}>Our Email:<span style={{color:"blue"}}>web3clubafrica@gmail.com</span></div>
          <div style={{fontSize:"24px"}}>Twitter handle: <span onClick={()=>{window.open('http://twitter.com/web3africanclub')}} style={{color:"blue"}}>@web3africanclub</span></div>
          <div style={{fontSize:"24px"}}>Telegram: <span onClick={()=>{window.open('http://t.me/web3clubafrica')}} style={{color:"blue"}}>@web3clubafrica</span></div>
        
    </Box>
  )




  
}

export default About