import User from "../models/userModel.js";

export const test = (req, res)=>{
    res.json({
        message : "Api route is working"
    })
}
