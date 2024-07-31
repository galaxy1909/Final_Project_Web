const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const productModel = require('./productModel');
const orderModel = require('./orderModel');

mongoose.connect("mongodb+srv://VPrajapati:A3p6vLuhLJ8JHTNd@cluster0.vixncbu.mongodb.net/Clustur0?retryWrites=true&w=majority&appName=Cluster0");

const app = express();

var corsOption = {
    origin1: " http://localhost:4200",
    origin2: "http://localhost:4300",
    origin3:"http://localhost:4400"
}

app.use(cors(corsOption));
async function createProduct(req, res) {
    const product = new productModel({
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        image: req.body.image,
        stock: req.body.stock
    });
    try {
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getProducts(req, res) {
    try {
        let product = await productModel.find();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function getProduct(req, res) {
    try {
        let product = await productModel.find({id: req.params.id});
        res.send(product);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteProduct(req, res) {
    try {
        await productModel.deleteOne({id: req.params.id});
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

async function updateProduct(req, res) {
    try {
        await productModel.updateOne({id: req.params.id}, req.body);
        res.sendStatus(400);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}


app.use(express.json());
app.post('/product', createProduct);
app.get('/product', getProducts);
app.get('/product/:id', getProduct);
app.delete('/product/:id', deleteProduct);
app.put('/product/:id', updateProduct);

app.listen(3000, () => {
    console.log('Server is running...');
});
