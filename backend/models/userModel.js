import mongoose from 'mongoose';

const userSchema =  new mongoose.Schema(
    {
        name : {
            type: String,
            require: true,
            unique: true,
        },

        email : {
            type: String,
            require: true,
            unique: true,
        },

        password : {
            type: String,
            require: true,
        },

        avatar: {
            type : String,
            default: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png"
            
        },

        phone : {
            type: Number,
            default: null
        },

        address : {
            type: String,
            default: ""
        },

        nationality : {
            type : String,
            default: ""
        },


        twitter : {
            type : String,
            default: ""
        },

        linkedin : {
            type : String,
            default: ""
        },

        instagram : {
            type : String,
            default: ""
        },

        facebook : {
            type : String,
            default: ""
        },

        youtube : {
            type : String,
            default: ""
        },

        biblical_stories : {
            type : Boolean,
            default: ""
        },
        science_fiction : {
            type : Boolean,
            default: ""
        },
        mystery_thriller : {
            type : Boolean,
            default: ""
        },
        historical_fiction : {
            type : Boolean,
            default: ""
        },
        adventure : {
            type : Boolean,
            default: ""
        },
        biography : {
            type : Boolean,
            default: ""
        },
        children_stories : {
            type : Boolean,
            default: ""
        },
       literacy_fiction : {
            type : Boolean,
            default: ""
        },
        humor : {
            type : Boolean,
            default: ""
        },
        drama : {
            type : Boolean,
            default: ""
        },
        non_fiction : {
            type : Boolean,
            default: ""
        },

        poetry : {
            type : Boolean,
            default: ""
        },

    },   
    
    { timestamps : true });

    const User = mongoose.model('User', userSchema);

   export default User