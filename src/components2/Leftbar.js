import { Box, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const menu = ["Home","About","FAQ","Help"]
const Leftbar = () => {
  return (
    <Box flex={1} sx={{display:{xs:"none",sm:["block","flex"]}, backgroundColor:"lightblue"}}>
        <Box position="fixed" sx={{justifyContent:"center",display:"flex",flexDirection:"column",height:"100vh"}}>
     {menu.map((i)=>{
        return<ListItem disablePadding>
            <ListItemText primary={i}/>

            
        </ListItem>
     })}
    </Box>
    </Box>
  )
}

export default Leftbar