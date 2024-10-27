// app.js

// Add your code here
import express from "express";
import dogFacts from "./dog_facts.js";

const app = express();

app.get('/facts', (req, res) => {
    const number = parseInt(req.query.number);
    console.log("Query parameter `number`:", req.query.number, "Parsed number:", number);
    
    if (req.query.number !== undefined && (isNaN(number) || number < 1)) {
        console.log("Invalid number parameter encountered.");
        return res.status(400).json({
            message: 'Invalid number parameter',
            success: false
        });
    }

    const facts = number ? dogFacts.slice(0, number) : dogFacts;
    console.log("Returning facts:", facts);
    return res.status(200).json({
        facts,
        success: true
    });
});

app.use((req, res) => {
    console.log("404 encountered for route:", req.path);
    res.status(404).json({
        message: 'Not Found',
        success: false
    });
});

export default app;

