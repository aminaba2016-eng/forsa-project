const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PanierSchema = new schema({
    userName:{
        type : String,
        required: true,
        
    },
    ProductName:{
        type : String,
        required: true,
        
    },
    pricetotal:{
        type : Number,
        required: true,
        
    },
    Productimage:{
        type : String,
        required: true,
        
    },
       
})
module.exports = Panier = mongoose.model("panier", PanierSchema);