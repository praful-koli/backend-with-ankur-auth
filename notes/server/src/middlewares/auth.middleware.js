import jwt from "jsonwebtoken"

async function identifyUser(req, res ,next) {
    const token = req.cookies.token;

  if(!token) {
    return res.status(401).json({
      message:"Token not provided ,Unauthorized access"
    })
  }

  let decoded = null;
  
  try {
       decoded = await jwt.verify(token, process.env.JWT_SECRET);

  } catch (error) {
    return res.status(401).json({
      message : "User Not Authorized!."
    })
  }
  req.user = decoded
  console.log("Decoded user from token:", decoded);
  next()
}


export default identifyUser