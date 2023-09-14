import {Table,styled,TableHead,TableBody,TableRow,TableCell, Button} from '@mui/material'
import { useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import React from 'react'
import { getUsers,deleteUser } from '../service/api';


const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
background: #678678;
`;

const Thead = styled(TableRow)`
 background: #000000;
  & > th{
 color : #fff; 
 font-size : 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > td{
    font-size: 20px
  }`

export default function AllUsers() {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
      getAllUsers();
  }, []);

  const getAllUsers = async () => {
   let response= await getUsers();
   setUsers(response.data);
  }

  const deleteUserDetails = async(id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
  <StyledTable>
     <TableHead>
       <Thead>
          <TableCell> Id</TableCell>
          <TableCell>Name </TableCell>
          <TableCell> Username</TableCell>
          <TableCell>Email </TableCell>
          <TableCell>Phone </TableCell>
          <TableCell> Update/Delete </TableCell>
       </Thead>

     </TableHead>
     <TableBody>
     {
        users.map(user => (
          <Tbody key={user._id} >
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant ="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`} >Update</Button>
              <Button variant="contained" color="secondary"  onClick={() => deleteUserDetails(user._id)} >Delete</Button>
            </TableCell>
          </Tbody>
        ))
     }
      
     </TableBody>
  </StyledTable>
  )
}
