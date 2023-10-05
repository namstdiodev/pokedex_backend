import mongoose from "mongoose";
export const connectMongoDb = () => {
  const connect = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://chaunguyennamdev:Namnguyen123@pokedex.zstg9yl.mongodb.net/pokedex`, {});
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.log(error)
      process.exit(1);
    }
  };
  connect();
  mongoose.connection.on("error", console.log);
  mongoose.connection.on("disconnected", connect);
};
