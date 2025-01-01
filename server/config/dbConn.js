const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI)
    }catch(err){
        console.error("error connection to DB")
    }
}
module.exports=connectDB

// const mongoose = require('mongoose');
// const connectDB= mongoose.connect('your_connection_string', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   ssl: true, // וודא שזה מוגדר
// })
//   .then(() => console.log('Connected to DB'))
//     .catch(err => console.error('Error connecting to DB:', err));
// module.exports=connectDB

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to DB'))
//   .catch((err) => console.error('Error connecting to DB', err));
