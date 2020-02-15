const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbadmin:123@cluster0-jftuw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const productschema = new Schema({
    name:String,
    description:String,
    unitprice:Number,
    isdelete:Boolean
});

const employeeschema = new Schema({
    name:String,
    surname:String,
    email:String,
    city:String
});

const Employee = mongoose.model('EmployeeModel', employeeschema);
const Product = mongoose.model('ProductModel', productschema);

module.exports = {
    Product,
    Employee
}

