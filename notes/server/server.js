import app from "./src/app.js";
import dotenv from 'dotenv'
import connectDB from "./src/config/db.js";

dotenv.config()
await connectDB()


app.listen(3000, ()=> {
    console.log("Server Runngin on port 3000")
})