const express = require('express');
var app = express();
var pmanager = require('./manager/productmanager');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/product/add',(req,res) => {
    pmanager.productmanager.add(req,res);
});

app.get('/product',(req,res) => {
    pmanager.productmanager.getall(req,res);
});

//id ye göre ürünü getiren express
app.get('/product/:id',(req,res) => {
    pmanager.productmanager.getbyid(req,res);
});

app.post('/product/update',(req,res) => {
    pmanager.productmanager.update(req,res);
});


app.post('/product/delete',(req,res) => {
    pmanager.productmanager.delete(req,res);
})|


app.post('/product/forcedelete',(req,res) => {
    pmanager.productmanager.forcedelete(req,res);
})


app.listen(3000);



