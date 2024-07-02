import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';

export const test = (req, res)=>{
    res.json({
        message : "Api route is working"
    })
}


export const updateUser  =  async (req, res, next  ) =>{
    if (req.user.id !== req.params.id) 
    return next (errorHandler(401, "You can only update your own account"))
    try {
        if (req.body.password){
            if(req.body.password.length < 6){
                return next (errorHandler(403, 'Password must be at least 6 characters'))
            }
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        } 
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
                phone : req.body.phone,
                address  : req.body.address,
                city : req.body.city,
                state  : req.body.state,
                country  : req.body.country,
                zip  :   req.body.zip,
                twitter  : req.body.twitter,
                linkedin  : req.body.linkedin,
                instagram  : req.body.instagram,
                pinterest  : req.body.pinterest,
                youtube  : req.body.youtube,
            }
        }, {new : true}
        
        )
        const {password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
        
    } catch (error) {
        next(error)
        
    }
};