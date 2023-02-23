// OrderController.js
// This file is responsible for taking in an order request and sending back the response.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

 // parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.post('/order', (req, res) => {
    const orderDetails = req.body;
    console.log('Received order details: ', orderDetails);

    // process the order somehow

    const responseObject = {
        message: 'Successfully ordered',
        order: orderDetails
    };
    console.log('Sending response object: ', responseObject);
    res.send(responseObject);

});

const port = 3000;

app.listen(port, () => console.log(`OrderController started on port ${port}`));
