const {User, Thought} = require('../models')

const userController ={
    getAllUser(req,res){
        User.find({})
            .populate({
                
            })
    }
}