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

    const {fecha_creacion, hora_creacion, monto, descripcion, UserId} = req.body;

    if(!fecha_creacion){
        res.status(400).send({status: 'failed', message: 'fecha_creacion should not be empty', data: null});
    }
    else if(!hora_creacion){
        res.status(400).send({status: 'failed', message: 'hora_creacion should not be empty', data: null});
    }
    else if(!monto){
        res.status(400).send({status: 'failed', message: 'monto should not be empty', data: null});
    }
    else if(!descripcion){
        res.status(400).send({status: 'failed', message: 'descripcion should not be empty', data: null});
    }
    else if(!UserId){
        res.status(400).send({status: 'failed', message: 'UserId should not be empty', data: null});
    }
    else{
        const createdRegister = await registerService.create(fecha_creacion, hora_creacion, monto, descripcion, UserId);
        if  (createdRegister){
            res.status(201).send({status: 'OK', message: 'register created', data: createdRegister});
        }else{
            res.status(400).send({status: 'failed', data: {error: error.message}});
        }
    }
    
   
};
const update = async (req, res)=>{

    const id = req.params.registerId;
    const {fecha_creacion, hora_creacion, monto, descripcion, UserId} = req.body;

    const updatedRegister = await registerService.update(id, fecha_creacion, hora_creacion, monto, descripcion, UserId);

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