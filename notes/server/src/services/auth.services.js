import userModel from "../models/users.model.js";
import ApiError from "../utils/ApiError.js";
import validateEmail from "../utils/validateEamil.js";

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

  // if user is new then register the user and create token

  let newUser = await userModel.create({ name, email, password });

  return newUser;
};

export { registerService };
