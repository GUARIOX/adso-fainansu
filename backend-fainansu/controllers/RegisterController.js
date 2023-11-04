const registerService = require('../services/RegisterService');

const getAll = async (req, res)=>{
    const register = await registerService.getAll();
    if(register){
        res.status(200).send({status: 'ok', data: register});
    }
    else{
        res.status(404).send({status:'failed', data: error});
    }
}
const get = async (req, res)=>{
    let id = req.params.registerId;
    try {
        const register = await registerService.get(id);
        res.status(200).send({status: 'ok', data: register});
    } catch (error) {
        res.status(error.status||500).send({status:'failed', data: {error: error.message} }); 
    }
   
}

const create = async (req, res)=>{

    const {creation_date, creation_time, amount, description, UserId, CategoryId} = req.body;

    if(!creation_date){
        res.status(400).send({status: 'failed', message: 'creation_date should not be empty', data: null});
    }
    else if(!creation_time){
        res.status(400).send({status: 'failed', message: 'creation_time should not be empty', data: null});
    }
    else if(!amount){
        res.status(400).send({status: 'failed', message: 'amount should not be empty', data: null});
    }
    else if(!description){
        res.status(400).send({status: 'failed', message: 'description should not be empty', data: null});
    }
    else if(!UserId){
        res.status(400).send({status: 'failed', message: 'UserId should not be empty', data: null});
    }
    else if(!CategoryId){
        res.status(400).send({status: 'failed', message: 'CategoryId should not be empty', data: null});
    }
    else{
        const createdRegister = await registerService.create(creation_date, creation_time, amount, description, UserId, CategoryId);
        if  (createdRegister){
            res.status(201).send({status: 'OK', message: 'register created', data: createdRegister});
        }else{
            res.status(400).send({status: 'failed', data: {error: error.message}});
        }
    }
    
   
};
const update = async (req, res)=>{

    const id = req.params.registerId;
    const {creation_date, creation_time, amount, description, UserId, CategoryId} = req.body;

    const updatedRegister = await registerService.update(id, creation_date, creation_time, amount, description, UserId, CategoryId);

    if  (updatedRegister){
        res.status(201).send({status: 'OK', message: 'register updated', data: updatedRegister});
    }else{
        res.status(400).send({status: 'failed', data: null});
    }
};
const destroy = async (req, res)=>{

    const id = req.params.registerId;

    const deletedRegister = await registerService.destroy(id);

    if  (deletedRegister){
        res.status(201).send({status: 'OK', message: 'register deleted', data: deletedRegister});
    }else{
        res.status(400).send({status: 'failed', data: { error: error.message }});
    }

};
module.exports = {
    get, getAll, create, destroy, update
}