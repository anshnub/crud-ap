
import { FormControl,styled,Button, FormGroup, InputLabel, Input, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { addUser } from '../service/api';


const Container = styled(FormGroup)`
  width: 50%;
  margin:5% auto 0 auto;
  & > div{
    margin-top: 20px
  }
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



export default function AddUser() {

    const [user,setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user,[e.target.name]:e.target.value});
        
    }
    const addUserDetails = async() => {
       await addUser(user);
     navigate('/all');
    }
  return (
    <Container>
     <Typography variant="h4" >Add User</Typography>
      <FormControl>
       <InputLabel>Name</InputLabel>
       <Input onChange={(e)=> onValueChange(e)} name="name" />

      </FormControl>
      <FormControl>
       <InputLabel>Username</InputLabel>
       <Input onChange={(e)=> onValueChange(e) } name="username"  />

      </FormControl>
      <FormControl>
       <InputLabel> Email</InputLabel>
       <Input onChange={(e)=> onValueChange(e)} name="email" />

      </FormControl>
      <FormControl>
       <InputLabel>Phone</InputLabel>
       <Input onChange={(e)=> onValueChange(e) } name="phone"  />

      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={()=> addUserDetails()} >Add User</Button>
      </FormControl>

    </Container>
  )
}
