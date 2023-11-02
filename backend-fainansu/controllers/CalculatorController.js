const calculatorService = require('../services/CalculatorService');

const getAll = async (req, res)=>{
    const calculator = await calculatorService.getAll();
    if(calculator){
        res.status(200).send({status: 'ok', data: calculator});
    }
    else{
        res.status(404).send({status:'failed', data: error});
    }
}
const get = async (req, res)=>{
    let id = req.params.calculatorId;
    try {
        const calculator = await calculatorService.get(id);
        res.status(200).send({status: 'ok', data: calculator});
    } catch (error) {
        res.status(error.status||500).send({status:'failed', data: {error: error.message} }); 
    }
   
}

const create = async (req, res)=>{

    const { name, icon, type, UserId} = req.body;

    if(!name){
        res.status(400).send({status: 'failed', message: 'name should not be empty', data: null});
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
        const createdCalculator = await calculatorService.create(name, icon, type, UserId);
        if  (createdCalculator){
            res.status(201).send({status: 'OK', message: 'calculator created', data: createdCalculator});
        }else{
            res.status(400).send({status: 'failed', data: {error: error.message}});
        }
    }
    
   
};
const update = async (req, res)=>{

    const id = req.params.calculatorId;
    const {name, icon, type, UserId} = req.body;

    const updatedCalculator = await calculatorService.update(id,name, icon, type, UserId);

    if  (updatedCalculator){
        res.status(201).send({status: 'OK', message: 'calculator updated', data: updatedCalculator});
    }else{
        res.status(400).send({status: 'failed', data: null});
    }
};
const destroy = async (req, res)=>{

    const id = req.params.calculatorId;

    const deletedCalculator = await calculatorService.destroy(id);

    if  (deletedCalculator){
        res.status(201).send({status: 'OK', message: 'calculator deleted', data: deletedCalculator});
    }else{
        res.status(400).send({status: 'failed', data: { error: error.message }});
    }

};
module.exports = {
    get, getAll, create, destroy, update
}