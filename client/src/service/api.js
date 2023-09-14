import axios from 'axios';

// const URL = 'http://localhost:8080';
const URL = 'https://mern-4rv5.onrender.com';

export const addUser = async(data) => {
  
    try {
       return await  axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling adduser api',error)
    }

}


export const getUsers = async() => {
    try{
      return   await axios.get(`${URL}/all`)
    }catch(error){
        console.log('Error while calling getUser API',error);
    }

   
}


export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling getuser api',error)
    }
}

export const editUser = async(user,id) => {
    try {
        return await axios.put(`${URL}/${id}`,user);
    } catch (error) {
        console.log('Error while calling edituser api',error)
    }
}

export  const deleteUser = async (id) => {
    try {
         return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log('Error while calling deleteUser api',error);
    }
}