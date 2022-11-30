import { Box, Typography } from '@mui/material'
import React from 'react'
import elian from "../images/elian2.jpg"
import davis from "../images/davis2.jpg";
import zeus from "../images/zeus2.jpg"
import shiddy from "../images/shiddy2.jpg";
import AliceCarousel from 'react-alice-carousel';
import  '../Web3club.css'


import Svgs from './Svgs';
const Home = () => {

const descCards = [{
  title:"Service DAO",
  desc:"We’re sourcing the most cutting edge Community building strategies, programming, integrations, and execution by coordinating a DAO."
},
{
  title:"Education",
  desc:"We’re designing curriculum and modules that aim to bring in the next wave of Community professionals to Ethereum and Web3."
},
{title:"Open Source",
desc:"We’re curating the best Community humans and resources in the space. With the goal to package and share our learnings with the wider Ethereum community, as a shared consciousness of Community coordination, for others to adopt and adapt."}
]

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
  {Name:"Nayiga Maggie",
  Description:["Web3 expert","Consultant"],
  image:shiddy,
  Contact:"nayigamaggie20",
  message:"An engaged community helps us better our products with their feedback, add more features based on their needs, and onboard more people onto Web3. The technology that powers Web3, blockchain, itself has the idea of the collective built in. If miners would not reach a consensus about the validity of a transaction, it wouldn’t be added to the chain, and therefore not exist. With that we have to engage the masses in the Web3 community and spread the importance"
}
]
const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 2,
  },
};

const items=users.map((user)=>{
  return<div style={{display:"flex",justifyContent:"center"}} key={user.Name}>{
    <Box 
    sx={{
      background:"linear-gradient(90deg, rgba(42,34,42,0.9640231092436975) 0%, rgba(0,0,0,1) 0%, rgba(10,12,13,1) 0%, rgba(17,27,21,0.9416141456582633) 100%, rgba(33,33,32,0.7455357142857143) 100%);",
      gap:"1.2rem",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:{xs:"80%",sm:"500px"},
      
      height:{xs:"100%",sm:"860px"},
      borderRadius:"10px"}}>
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
    <Box sx={{display:"flex",alignItems:"center",paddingLeft:{sm:"0px",md:"60px"},flexDirection:"column"}}>
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center", 
          padding:"5px",
          flexDirection:{xs:"column",md:"row"},
          backgroundImage: `url(${<Svgs />})`
          }}>
          <Typography fontWeight={700} sx={{paddingTop:"60px",fontSize:{xs:"50px",md:"80px",lineHeight:"5rem"}}} >The Present and Future about Web3 is here </Typography>
        
            <Typography>There is a huge demand online for Community Anything: Managers, Directors, and Leads. Even more traditionally technical positions, like Developers, are seeking Evangelists and Advocates like never before.The Web3 Community educates up-and-coming Web3 community professionals and leaders.</Typography>
            {/* <div style={{ backgroundImage: `url(${logo})` }}>hhh</div> */}
            <Svgs />
        </Box>


            <Typography variant="h3" sx={{color:"yellow",padding:"2rem"}}>WHY WEB 3.0</Typography>
            
    
            
            

        
        <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={2000}
        animationDuration={20000}
        
      
        responsive={responsive}
        items={items}
        
      />
      
      <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <Typography sx={{fontSize:"30px",fontWeight:"600"}}>Were putting the We </Typography>
        <Typography sx={{fontSize:"25px",fontWeight:"600"}}>in Web3</Typography>
        <Typography sx={{fontSize:"25px",padding:"20px",color:"orange"}}>Goals</Typography>
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",sm:"row",},gap:"10px",alignItems:"center"}}>
        {descCards.map((card)=>{
          return(<div key={card.title} className='card2' >
          <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
          <Typography sx={{padding:2,fontWeight:"bold",fontSize:"30px"}}>{card.title}</Typography></div>
          <div style={{display:"flex",flexDirection:"column" ,justifyContent:"center",height:"70%"}}>
          <Typography sx={{fontSize:"20px",fontWeight:"200px",padding:"10px",color:"yellow"}}>{card.desc}</Typography>
        </div>
        </div>)
        })}
        </Box>
      </Box>
    </Box>
  )
}


export default Home