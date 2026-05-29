const Todo = require('../models/Todo');

exports.updateTodoById = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {
                _id: id
            },
            {
                title: title, 
                description: description, 
                updatedAt: Date.now()
            }
        );

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} : Data Updated Succcessfully` 
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
};