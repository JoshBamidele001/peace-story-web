import User from '../models/userModel.js'


export const signup = async (req, res)=>{
        const { name, email, password , avatar, phone, address, nationality, twitter, linkedin, instagram, facebook, youtube, biblical_stories, science_fiction, mystery_thriller, historical_fiction, adventure, biography, children_stories, literacy_fiction, humor, drama, non_fiction, poetry } = req.body
        if ( !name || !email || !password || name === '' || email === '' || password === '' ) {
                return res.status(400).json("All fields are required")
        }

        const newUser = new User({
                name,
                email,
                password,
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

        await newUser.save();
        res.json( "Signup Successfully")
};