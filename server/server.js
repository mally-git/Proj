require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { mongoose } = require("mongoose")
const PORT = process.env.PORT || 9000
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
//app.use(express.static("public"))
app.get("/", (req, res) => {
    res.send("Home Page shira baran")
})
app.use("/api/users", require("./Routes/User"))
process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception:', err);
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})
// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
// });
// process.on('SIGINT', () => {
//     server.close(() => {
//       console.log('Server closed. Port released.');
//       process.exit(0);
//     });
//   });