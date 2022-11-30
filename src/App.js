// import React from 'react'
// import './App.scss'
// import { Route, Routes } from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './components/Home'


// const App = () => {
//   return (
//    <div>
//     <Layout />
//    <Routes>
    
//     <Route path='/' element={<Home />} />
//    </Routes>
//    </div>
//   )
// }

// export default App
import { Box } from '@mui/material';
import React from 'react'
import NavBar from './web3club/NavBar'
import "./Web3club.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './web3club/Home';
import About from './web3club/About';
import Contact from './web3club/Contact';
import NotFound from './web3club/NotFound';
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from './web3club/Footer';
import Gallery from './web3club/Gallery';

const App = () => {
 
  return (
    
      
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      backgroundColor:"#14161a",
      minHeight:"100vh",
      gap:"40px",
      color:"white"
      }}>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact'  element={<Contact />}/>
        <Route path='gallery' element={<Gallery />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
      <Footer />
    </Box>
  
   
  )
}

export default App