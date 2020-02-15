var models = require('./../mongoosemodels')

const productmanager = {
    add : (req,res) => {
        var entity = new models.Product();
        entity.name = req.body.name;
        entity.description = req.body.description;
        entity.unitprice = req.body.unitprice;

        entity.save((err,result) => {
            if(!err){
                res.status(201).send("Success!!");
            }
            else{
                res.status(500).json(err);
            }
        })
    },
    getall : (req,res) => {
        models.Product.find({},(err,document) => { 
            if(!err){
                res.json(document);       
            }
            else{
                res.status(500).json(err);
            }
        })
    },
    getbyid: (req,res) => {
        var id = req.params.id;

        models.Product.findById(id,(err,document) => {
            if(!err){
                res.json(document);
            }
            else{
                res.status(500).json(err);
            }
        })
    }
}

module.exports = {
    productmanager
}