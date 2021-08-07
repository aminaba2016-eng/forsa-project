const express = require("express");

const Panier = require("../models/Panier");
const router = express.Router();

//Get a list of all category
router.get('/', async (req,res,next) => {
    try{

        
        const results = await Panier.find();
        

        res.send(results);


    }catch(error){
        console.log(error.message)
    }
});

//create a new category
router.post('/', async (req,res,next) => {

    try{
        const panier = new Panier(req.body);
        const result = await panier.save();
        res.send(result);

    }catch(error){
        console.log(error.message);
         
        //if the price or name not existt
        if(error.message === 'validationError'){
            return res.status(422).send(error.message);
        }
        
    }
})
//get a category by id
router.get('/:id', async (req,res,next) => {
    const id = req.params.id;
    try{
        const panier = await Panier.findById(id)
        if (!panier){
            return res.status(404).send({msg: 'Panier does not exist'})
        }
        // res.send(product);

    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid panier id"});
        // next(error);


    }
});
//update a product by id
router.put('/:id', async (req,res,next) => {
    try{
        const id = req.params.id;
        const updates = req.body;
        const options = {new:true}
        const result = await Category.findByIdAndUpdate(id,updates,options)
        if(!result){
            return res.status(404).send({msg: 'panier does not exist'})

        }
        // res.send(result)
    }catch(error){
        console.log(error.message);
        res.status(400).send({ msg: "Invalid panier id"});

    }
});
//delete a product by id
router.delete('/:id',async (req,res,next) => {
    const id = req.params.id;
    try{
        const result = await Panier.findByIdAndDelete(id);
        // res.send(result);
        if (!result){
            return res.status(404).send({msg: 'category does not exist'})
        }
    }catch(error){
        console.log(error.message)
        res.status(400).send({ msg: "Invalid category id"});

    }
});


module.exports = router;