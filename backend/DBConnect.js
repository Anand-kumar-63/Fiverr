import mongoose from "mongoose";
async function ConnectDB() {
    const mongodb_uri = process.env.MONGODB_URI;
    try{
        await mongoose.connect(mongodb_uri,{
            dbName:"Fiverr"
        });
    }catch (err) {
        console.log(err, "Error in connecting to the database");
    }}
export default ConnectDB;
