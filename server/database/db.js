
import mongoose from 'mongoose';
 

const Connection = async (username,password) => {

    const URL = `mongodb://${username}:${password}@ac-vefxtsi-shard-00-00.o6onwyp.mongodb.net:27017,ac-vefxtsi-shard-00-01.o6onwyp.mongodb.net:27017,ac-vefxtsi-shard-00-02.o6onwyp.mongodb.net:27017/?ssl=true&replicaSet=atlas-pmj1sw-shard-0&authSource=admin&retryWrites=true&w=majority`;
      try {
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true})
        console.log('Database connected successfully');
      } catch (error) {  
        console.log('Error while connecting with the database',error)
      }

}

export default Connection;