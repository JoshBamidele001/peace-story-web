import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';


export const signup = async (req, res, next)=>{
        const { name, email, password , avatar, phone, address, nationality, twitter, linkedin, instagram, facebook, youtube, biblical_stories, science_fiction, mystery_thriller, historical_fiction, adventure, biography, children_stories, literacy_fiction, humor, drama, non_fiction, poetry } = req.body
        if ( !name || !email || !password || name === '' || email === '' || password === '' ) 
                {
                next(errorHandler(400, 'All fields are required'))
        }

        const hashedPassword = bcryptjs.hashSync(password,10)

        const newUser = new User({
                name,
                email,
                password: hashedPassword,
                avatar,
                phone, 
                address,
                nationality, 
                twitter, 
                linkedin, 
                instagram,
                facebook,
                youtube,
                biblical_stories,
                science_fiction,
                mystery_thriller,
                historical_fiction,
                adventure,
                biography,
                children_stories,
                literacy_fiction,
                humor,
                drama,
                non_fiction,
                poetry,   
        });

        
        try {
                await newUser.save();
                res.json( "Signup Successfully")
                
        } catch (error) {
                next(error)
        }
};