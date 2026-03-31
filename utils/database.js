import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongodb is connected");
    return;
  } else {
    let Db = process.env.MONGODB_URI.replace(
      "<db_password>",
      process.env.MONGODB_PASSWORD
    );
    try {
      await mongoose.connect(Db, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log("mongodb is connected");
    } catch (error) {
      console.error("Failed to connect to mongodb", error);
    }
  }
};
