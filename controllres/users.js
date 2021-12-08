const users = require("../routes/users")


 const getAllUsers = (req,res)=>{
     
     res = users;
     res.json(res)
     console.log(res)
 }

 module.exports ={getAllUsers}