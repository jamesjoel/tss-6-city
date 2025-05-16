import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    console.log("---------- NOT CONNECTED")
})


export default mongoose;

// khMFXx42OMyQZ3BA