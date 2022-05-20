const jwt = require("jsonwebtoken");
const User = require("../model/modelSchema");

const Authenticate = async (req, res, next) => { 
  try {
    const token = req.cookies.jwtoken;
      console.log("token",token)
    const verifyToken = jwt.verify(
      token,
      "MYNAMEISLALITGOYALANDIWANTTOBECOMESOFTWAREDEVL"
    );
    console.log("verifyToken",verifyToken)
    

    const rootUser = await User.findOne({
      _id:verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("user not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    //console.log("rootuser",rootUser) its working
    req.userID = rootUser._id; 
   // console.log("req.userId",rootUser._id) data receiving
    next();
  } catch (error) {
    res.status(401).send("unauth: no token provided for user");
    console.log(error);
  }
};

module.exports = Authenticate;
