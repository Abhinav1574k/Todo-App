const Todo = require('../models/Todo');

exports.deleteTodoById = async(req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete({_id: id});

        res.status(200).json({
            success:true,
            message:"Todo Deleted Succcessfully" 
        });
    }
    catch(err){
        console.error(err);
        
        console.log(err);

        res.status(404).json({
            success:false,
            message:err.message 
        });
    }
};