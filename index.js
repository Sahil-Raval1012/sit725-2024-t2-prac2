const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`'Welcome to the Calculator API. Use "/" followed by any of the mathematical operations given below 
        <div classname="Font">
        <ul>
        <li> add </li>
        <li> subtract </li> 
        <li> multiply </li> 
        <li> divide </li>
        <li> power </li>
        </ul> 
        </div>
        followed by num1 = "selected first number" & num2 = "selected second number".'`);
});
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});
app.get('/subtract', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }
    const sum = num1 - num2;
    res.send(`The difference of ${num1} and ${num2} is ${sum}`);
});
app.get('/multiply', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }
    const sum = num1 * num2;
    res.send(`The product of ${num1} and ${num2} is ${sum}`);
});
app.get('/divide', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }
    const sum = num1 / num2;
    res.send(`The remainder of ${num1} and ${num2} is ${sum}`);
});
app.get('/power', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers');
    }
    const sum = num1**num2;
    res.send(`The power of ${num1} and ${num2} is ${sum}`);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
