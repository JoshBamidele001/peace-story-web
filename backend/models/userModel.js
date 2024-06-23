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
            default: "https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2Fprofile%20picture.jpg?alt=media&token=fa246428-c7fe-4f44-993d-ae55a05d9159"
            
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
            default: "true"
        },
        science_fiction : {
            type : Boolean,
            default: "false"
        },
        mystery_thriller : {
            type : Boolean,
            default: "false"
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