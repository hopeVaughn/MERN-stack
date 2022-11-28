import mongoose from "mongoose";

const connectionString = 'mongodb+srv://hopeVaughn:brazyl11@jobhunter.ufgq21o.mongodb.net/jobhunter?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect();
}
export default connectDB