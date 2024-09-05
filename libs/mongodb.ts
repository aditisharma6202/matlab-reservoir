import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MongoDB URI is not defined in the environment variables");
        }
        
        await mongoose.connect(mongoURI);  // No need for options like useNewUrlParser
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};
