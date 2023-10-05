import mongoose from "mongoose";
import { isEmail } from "validator";
import { UserDoc } from "./docs/user.doc";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    require: [true, "Please enter an password"],
    minLength: [6, "Minimum password length is 6 characters"],
  },
});

const User: any = mongoose.model<UserDoc>("user", userSchema);

export default User;
