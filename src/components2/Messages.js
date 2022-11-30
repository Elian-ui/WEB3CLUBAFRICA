import React, { useEffect, useState } from 'react'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, doc } from "firebase/firestore";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9EXsfDvWXa3fbWYCHbz3CuuW_tfUO1k",
  authDomain: "web3clubafrica.firebaseapp.com",
  projectId: "web3clubafrica",
  storageBucket: "web3clubafrica.appspot.com",
  messagingSenderId: "887862240635",
  appId: "1:887862240635:web:01c91207fa30928b8e09de"
};

const Messages = () => {
  const [tablebtnClicked, settablebtnClicked] = useState(false)
  const [userdata, setuserdata] = useState([])

  useEffect(() => {
    getData();
    
  }, [])
  

    const app = initializeApp(firebaseConfig);

    //get db
    const db = getFirestore();

    //init
    const colRef = collection(db, "messages");

    //get data
    
  
    
    const getData = async () => {
      const messg:any [] =[]
      const messages = await getDocs(colRef)
      messages.forEach(message => {
        messg.push({...message.data(),id:message.id})
      });
      
      setuserdata(messg)
      //settablebtnClicked(!tablebtnClicked)
    }
    const btnFetch = ()=>{
      console.log(userdata);
      
       settablebtnClicked(!tablebtnClicked)
    }
    
        
        
    
        
            


    return (
      <Box>
        <Button variant='contained' onClick={btnFetch}>Fetch</Button>
        {tablebtnClicked
        &&
        
        
        
        
        <TableContainer component={Paper}>
          <Table arial-label="Messages">
            <TableHead>
              <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             {userdata.map((user)=>{
              return<TableRow key={user.id}><TableCell >{user.Name}</TableCell>
                    <TableCell>{user.email}</TableCell></TableRow>
            })}
            
            
            </TableBody>
          </Table>
        </TableContainer>
        
}
      </Box>
    )
  }
// Initialize Firebase



export default Messages