import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" })


connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log(`Server Error: ${error}`);
            throw error;
        })
        const PORT = process.env.PORT || 8000
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(`MONGO DB connection failed !! ${error}`);
    })












// Approach 1 (everything in index file)
/*

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log(`Error: ${error}`);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`);
        throw error;
    }
})()

*/