import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
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

export const signin = async (req, res, next) => {
        const { email, password } = req.body;

        if (!email || !password || email === '' || password === ''){
                next(errorHandler(400, 'All fields are required'))
        }
        try {
                const validUser = await User.findOne({email })
                if(!validUser)  {
                        next(errorHandler(404, 'User not form'));
                }
         
                const validPassword = bcryptjs.compareSync(password, validUser.password);
                if (!validPassword){
                        return   next(errorHandler(400, 'Wrong credentials'))
                }

                const token =jwt.sign(
                        {id:validUser._id},
                        process.env.JWT_SECRET);
                        const { password: pass, ...rest } = validUser._doc
                        // {expiresIn:'1h'}  for the expiration of the token
                        res
                                .cookie('access_token', token, {
                                httpOnly:true})
                                .status(200)
                                .json (rest)
                
        } catch (error) {
                next(error);
        }
}

export const google = async (req, res, next) => {
        const {email, name, googlePhotoUrl } = req.body;

        try {
                const user = await User.findOne({email});
                if (user){
                        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
                        const {password, ...rest} = user._doc;
                        res.status(200).cookie('access_token', token, {
                                httpOnly: true,
                        }).json(rest);
                } else  {
                        const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
                        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
                        const newUser = new User ({
                                name,
                                email,
                                password: hashedPassword,
                                avatar: googlePhotoUrl,
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

                                await newUser.save();
                                const token = jwt.sign({ id: newUser._id}, process.env.JWT_SECRET);
                                const { password, ...rest } = newUser._doc;

                                res.status(200).cookie('access_token', token, {
                                        httpOnly: true,
                                })
                                .json(rest)
                }
        } catch (error) {
                next(error)
                
        }
}

export const logout = ( req, res , next) =>{
        try {
            res.clearCookie('access_token');
            res.status(200).json('User has been logged out!')
        } catch (error) {
            next(error)
        }
    }