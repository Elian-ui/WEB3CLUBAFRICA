import { Button, createTheme, TextareaAutosize, TextField, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const ContactUs = () => {
    const lightTheme = createTheme({
        palette:{
            mode:"dark",
        }
    });

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [message, setmessage] = useState('')

const handleOnClick=()=>{
  addDoc(colRef,
    {
      Name:name,
      message:message,
      email:email

    }
    ).then(()=>{console.log("success")}).catch(e=>{console.log(e.message);
    })
}

const firebaseConfig = {
  apiKey: "AIzaSyDI9EXsfDvWXa3fbWYCHbz3CuuW_tfUO1k",
  authDomain: "web3clubafrica.firebaseapp.com",
  projectId: "web3clubafrica",
  storageBucket: "web3clubafrica.appspot.com",
  messagingSenderId: "887862240635",
  appId: "1:887862240635:web:01c91207fa30928b8e09de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get db
const db = getFirestore();

//init
const colRef = collection(db, "messages");

//get data

 

  const sendEmail = () => {
   

    emailjs.sendForm('service_4ygwvcg', 'template_pgssfxk',{username:name,email:email,message:message},  'hCjWLiJ3Hu2KOixqW',
    
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <ThemeProvider theme={lightTheme}>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"}}>
        <div style={{padding:"20px"}}>
        <Box sx={{color:"yellow",fontSize:"25px",display:"flex",justifyContent:"center"}}>Contact Us</Box>
        <div style={{color:"white",fontSize:"20px"}}>Have any questions? We're here to help</div>
        <div style={{color:"white",fontSize:"18px",}}>Connect with us by filling this form</div>
        </div>
       
        <TextField value={name} onChange={e=>setname(e.target.value)} label="Name"/>
        <TextField value={email} onChange={(e)=>{setemail(e.target.value)}} label="Your Email" />
        <TextareaAutosize value={message} onChange={(e)=>{setmessage(e.target.value)}} aria-label='Message' placeholder='Your Message Here'  minRows={6} style={{width:250}}/>
        <div><Button onClick={()=>{handleOnClick(); sendEmail()}} color="secondary" variant="contained">Submit</Button></div>
              

    </Box>
    </ThemeProvider>
  )
}

export default ContactUs