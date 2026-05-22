import mongoose from "mongoose";

async function ConnectDB() {
  const mongodb_uri = process.env.MONGODB_URI;
  if (!mongodb_uri) {
    throw new Error("MONGODB_URI is not set in environment variables");
  }
  await mongoose.connect(mongodb_uri, {
    dbName: "Fiverr",
  });
  console.log("MongoDB connected");
}

export default ConnectDB;
