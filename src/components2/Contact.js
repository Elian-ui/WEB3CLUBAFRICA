import { Alert, Button, createTheme, InputAdornment, TextareaAutosize, TextField, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { AccountCircle, Email } from '@mui/icons-material';


const Contact = () => {
    const lightTheme = createTheme({
        palette:{
            mode:"dark",
        }
    });

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [message, setmessage] = useState('')
const [alertMessage, setalertMessage] = useState('')
const [alertVisib, setalertVisib] = useState("none")
const [severity, setseverity] = useState('info')





 


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
        if(name==='') { 
            setalertVisib("block")
            setalertMessage("Username empty")
            setseverity("error")
            return
    }

        //uname validation

        var uname= "^[A-Za-z][A-Za-z0-9_]{7,29}$";
        // if(!name.match(uname)){
        //     setalertVisib("block")
        //     setalertMessage("Username invalid")
        //     setseverity("error")
        //     return false
        // }


        if(email===''){ 
            setalertVisib("block")
            setalertMessage("Email empty")
            setseverity("error")
            return
        }
        //email validation

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(validRegex)){


            setalertVisib("block")
            setalertMessage("Email invalid")
            setseverity("error")
            return false

        } 

        

        if(message===''){ 
            setalertVisib("block")
            setalertMessage("Message empty")
            setseverity("error")
            return
        }
      
  
      emailjs.sendForm('service_4ygwvcg', 'template_pgssfxk', form.current, 'hCjWLiJ3Hu2KOixqW')
        .then((result) => {
            // console.log("succ");
            setalertVisib("block")
            setalertMessage("Message sent successly")
            setseverity("success")
        }, (error) => {
            // console.log(error.text);
            setalertVisib("block")
            setalertMessage(" Some error occured")
            setseverity("error")
        });
    }



  return (
    <ThemeProvider theme={lightTheme}>
        <form ref={form}>
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"}}>
        <div style={{padding:"20px"}}>
        <Box sx={{color:"yellow",fontSize:"25px",display:"flex",justifyContent:"center"}}>Contact Us</Box>
        <div style={{color:"white",fontSize:"20px"}}>Have any questions? We're here to help</div>
        <div style={{color:"white",fontSize:"18px",}}>Connect with us by filling this form</div>
        </div>
       
        <TextField 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
             value={name} onChange={e=>setname(e.target.value)} label="Name" name="user_name"/>
        <TextField
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        value={email} onChange={(e)=>{setemail(e.target.value)}} label="Your Email" type='email' name="user_email"/>
        <TextareaAutosize value={message} onChange={(e)=>{setmessage(e.target.value)}} aria-label='Message' name="message" placeholder='Your Message Here'  minRows={6} style={{width:250}}/>
        <div><Button onClick={sendEmail} color="secondary" variant="contained">Submit</Button></div>
        <div style={{display:alertVisib}}><Alert severity={severity} >{alertMessage}</Alert></div>

    </Box>
    </form>
    </ThemeProvider>
  )
}

export default Contact