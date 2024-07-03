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
                nationality : req.body.nationality,
                twitter  : req.body.twitter,
                linkedin  : req.body.linkedin,
                instagram  : req.body.instagram,
                facebook  : req.body.facebook,
                youtube  : req.body.youtube,
                biblical_stories : req.body.biblical_stories,
                science_fiction : req.body.science_fiction,
                mystery_thriller : req.body.mystery_thriller,
                historical_fiction : req.body.historical_fiction,
                adventure : req.body.adventure,
                biography : req.body.biography,
                children_stories : req.body.children_stories,
                literacy_fiction : req.body.literacy_fiction,
                humor : req.body.humor,
                drama : req.body.drama,
                non_fiction : req.body.non_fiction,
                poetry : req.body.poetry, 
                prose : req.body.prose, 
            }
        }, {new : true}
        
        )
        const {password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
        
    } catch (error) {
        next(error)
        
    }
};