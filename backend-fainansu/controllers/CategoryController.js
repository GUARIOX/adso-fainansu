const categoryService = require('../services/CategoryService');

const getAll = async (req, res)=>{
    const category = await categoryService.getAll();
    if(category){
        res.status(200).send({status: 'ok', data: category});
    }
    else{
        res.status(404).send({status:'failed', data: error});
    }
}
const get = async (req, res)=>{
    let id = req.params.categoryId;
    try {
        const category = await categoryService.get(id);
        res.status(200).send({status: 'ok', data: category});
    } catch (error) {
        res.status(error.status||500).send({status:'failed', data: {error: error.message} }); 
    }
   
}

const create = async (req, res)=>{

    const { name_ctg, icon, type, UserId} = req.body;

    if(!name_ctg){
        res.status(400).send({status: 'failed', message: 'name_ctg should not be empty', data: null});
    }
    else if(!icon){
        res.status(400).send({status: 'failed', message: 'icon should not be empty', data: null});
    }
    else if(!type){
        res.status(400).send({status: 'failed', message: 'type should not be empty', data: null});
    }
    else if(!UserId){
        res.status(400).send({status: 'failed', message: 'UserId should not be empty', data: null});
    }
    else{
        const createdCategory = await categoryService.create(name_ctg, icon, type, UserId);
        if  (createdCategory){
            res.status(201).send({status: 'OK', message: 'register created', data: createdCategory});
        }else{
            res.status(400).send({status: 'failed', data: {error: error.message}});
        }
    }
    
   
};
const update = async (req, res)=>{

    const id = req.params.categoryId;
    const {name_ctg, icon, type, UserId} = req.body;

    const updatedCategory = await categoryService.update(id,name_ctg, icon, type, UserId);

    if  (updatedCategory){
        res.status(201).send({status: 'OK', message: 'register updated', data: updatedCategory});
    }else{
        res.status(400).send({status: 'failed', data: null});
    }
};
const destroy = async (req, res)=>{

    const id = req.params.categoryId;

    const deletedCategory = await categoryService.destroy(id);

    if  (deletedCategory){
        res.status(201).send({status: 'OK', message: 'register deleted', data: deletedCategory});
    }else{
        res.status(400).send({status: 'failed', data: { error: error.message }});
    }

};
module.exports = {
    get, getAll, create, destroy, update
}