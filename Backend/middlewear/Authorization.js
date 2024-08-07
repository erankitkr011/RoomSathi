const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req, res, next) => {
  try {
    const token = req.body.token || req.cookie.token;
    if (!token) {
      return res.json({
        message: "Token Not Available",
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (error) {
      return res.json({
        message: "Token is invalid",
      });
    }

    next();

  } catch (error) {
    return res.json({
      sucess: false,
      message: "Auth Not verify",
    });
  }
};

const isAdmin=(req,res,next)=>{
    try {
  
        if(req.user.role!=="Admin"){
            return res.json({
                message:"This is route for Admin only"
            })
        }
        next();
        
      } catch (error) {
        return res.json({
                sucess:false,
                message:"Auth Not verify"
             })
      }
}


const isVisitor = (req,res,next) =>{
    try {
  
      if(req.user.role!=="Student"){
          return res.json({
              message:"This is route for students only"
          })
      }
      next();
      
    } catch (error) {
      return res.json({
              sucess:false,
              message:"Auth Not verify"
           })
    }
  
  }

  module.exports={authorization,isVisitor,isAdmin};