const currencyService = require('../services/CurrencyService');

const getAll = async (req, res)=>{
    const currencies = await currencyService.getAll();
    if(currencies){
        res.status(200).send({status: 'ok', data: currencies});
    }
    else{
        res.status(404).send({status:'failed', data: currencies});
    }
}
const get = async (req, res)=>{
    let id = req.params.currencyId;
    try {
        const currency = await currencyService.get(id);
        res.status(200).send({status: 'ok', data: currency});
    } catch (error) {
        res.status(error.status||500).send({status:'failed', data: {error: error.message} }); 
    }
   
}

const create = async (req, res)=>{

    const {type, logo,} = req.body;

    if(!type){
        res.status(400).send({status: 'failed', message: 'type should not be empty', data: null});
    }
    else if(!logo){
        res.status(400).send({status: 'failed', message: 'logo should not be empty', data: null});
    }
    
    else{
        const createdCurrency = await currencyService.create(type, logo);
        if  (createdCurrency){
            res.status(201).send({status: 'OK', message: 'user created', data: createdCurrency});
        }else{
            res.status(400).send({status: 'failed', data: {error: error.message}});
        }
    }
    
   
};
const update = async (req, res)=>{

    const id = req.params.currencyId;
    const {type, logo} = req.body;

    const updatedCurrency = await currencyService.update(id, type, logo);

    if  (updatedCurrency){
        res.status(201).send({status: 'OK', message: 'user updated', data: updatedCurrency});
    }else{
        res.status(400).send({status: 'failed', data: null});
    }
};
const destroy = async (req, res)=>{

    const id = req.params.currencyId;

    const deletedCurrency = await currencyService.destroy(id);

    if  (deletedCurrency ){
        res.status(201).send({status: 'OK', message: 'user deleted', data: deletedCurrency });
    }else{
        res.status(400).send({status: 'failed', data: { error: error.message }});
    }

};
module.exports = {
    get, getAll, create, destroy, update
}