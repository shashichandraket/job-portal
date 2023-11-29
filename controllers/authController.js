import userModel from "../models/userModel.js";

export const registerController =async(req,res,next) =>{
    
       const{name,email,password,lastName} =req.body;
       //validate
       //if(!name){
       // next("name is required");
       //}
       //if(!email){
       // next("email is required");
       //}
       //if(!password){
       // next("password is required and greater than 6 character");
       //}
       //const exisitingUser =await userModel.findOne({email})
       //if(exisitingUser){
       // next("Email Already Register Please Login");
       //}
       const user =await userModel.create({name,email,password,lastName});
       //token
       const token  = user.createJWT();
       res.status(201).send({
        success:true,
        message:'User Created Successfully',
        user:{
              name:user.name,
              lastName: user.lastName,
              email:user.email,
              location:user.location,
        },
        token,
       });

    
};