import { LockRounded } from '@mui/icons-material'
import { Alert, Box, Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/fireb'
import Messages from '../Messages';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    
    const lightTheme = createTheme({
        palette:{
            mode:"dark",
        }
    });


    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [alertdata, setalertdata] = useState({message:"",severit:"success",visib:"none"})
    const navigate = useNavigate()
    const handleonClick= async ()=>{
      if(username===''){
      setalertdata({message:"Email empty",severit:"error",visib:"block"})
      return
      }
      if(password===''){
        setalertdata({message:"Password empty",severit:"error",visib:"block"})
        return
        }
        
   
    try {
      {const user = await signInWithEmailAndPassword(auth,username,password)
        navigate('/messages')
      }
    
      
    } catch (e) {
      setalertdata({message:e.message,severit:"error",visib:"block"})
      console.log(e.message);
      
    }
  }

    const logout=async ()=>{
    
    }
  return (
    <ThemeProvider theme={lightTheme}>
    <Box>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",padding:"40px",gap:"1.5rem"}}>
        <LockRounded />
        <Typography color="secondary">Admin login</Typography>
        <TextField value={username} onChange={(e)=>{setusername(e.target.value)}} label="Email" />
        <TextField value={password} onChange={(e)=>{setpassword(e.target.value)}} type={'password'} label="Password" />
        <div><Alert sx={{display:alertdata.visib}} >{alertdata.message}</Alert></div>
        <Button onClick={handleonClick} variant="contained">Log In</Button>
    </Box>
    </Box>
    </ThemeProvider>
  )
}

export default Admin