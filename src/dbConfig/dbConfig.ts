import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        
        connection.on("connected", ()=>{
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err)=>{
            console.log("Error connecting to the database", err);
            process.exit(1);
        });
        
    }catch(error){
        console.log("Something went wrong while connecting to the database", error);
    }
}