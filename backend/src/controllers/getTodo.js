const Todo = require('../models/Todo');

exports.getTodo = async(req, res) => {
    try{
        const todos = await Todo.find();

        res.status(200).json({
            success:true,
            data:todos,
            message:"Data Fetched Succcessfully" 
        });
    }
    catch(err){
        console.error(err);
        
        console.log(err);

        res.status(404).json({
            success:false,
            data:"Not Found",
            message:err.message 
        });
    }
}