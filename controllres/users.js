const users = require("../routes/users")


 const getAllUsers = (req,res)=>{
     res.send(users)
     console.log(res)
 }

 module.exports ={getAllUsers}