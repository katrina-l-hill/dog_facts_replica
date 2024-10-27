// app.js

// Add your code here
const express = require("express");
const dogFacts = require("./dog_facts");
const app = express();

app.get('/facts', (req, res) => {
    const number = parseInt(req.query.number);
    if (isNaN(number) || number < 1) {
        return res.status(400).json({message: 'Invalid number parameter', success: false});
    }
    return res.json({facts: dogFacts.slice(0, number), success: true});
});

app.use((req, res) => {
    res.status(404).json({message: 'Not Found', success: false});
});



export default app;
