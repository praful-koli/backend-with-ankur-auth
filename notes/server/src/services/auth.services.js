import userModel from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import validateEmail from "../utils/validateEamil.js";
import bcrypt from 'bcrypt'


// regtisterService
const registerService = async (userData) => {
  const { name, email, password } = userData;

  //validation
  if (!name) throw new ApiError(400, "User name required");

  if (!email) throw new ApiError(400, "User email required");

  if (!password) throw new ApiError(400, "User password required");

  // check email is valid format or not
  if (!validateEmail(email)) throw new ApiError(400, "Invalid email format");

  //  check user alredy register

  let user = await userModel.findOne({ email });

  if (user) {
    throw new ApiError(409, "User Already register go to login");
  }

  // if user is new then register the user and hash a password

  let hashpassword = await bcrypt.hash(password, 10)

  let newUser = await userModel.create({ name, email, password :hashpassword });

  return newUser;
};

// loginService
const loginService = async (userData) => {
    const {email, password} = userData;

     //validation
  
  if (!email) throw new ApiError(400, "User email required");

  if (!password) throw new ApiError(400, "User password required");

  // check email is valid format or not
  if (!validateEmail(email)) throw new ApiError(400, "Invalid email format");

  // check user exist or not 
  
  let user = await userModel.findOne({email})
  if (!user)  throw new ApiError(404, 'User not found')

  // check password is valid or not 
  console.log(user)
  console.log(password)
  let isPassword = await bcrypt.compare(password, user.password ) 
  
  console.log(isPassword)
  if (!isPassword) {throw new ApiError(401, "Invalid password")};
   return user 
};

export { registerService, loginService };
