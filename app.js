// app.js

// Add your code here
import express from "express";
import dogFacts from "./dog_facts.js";

const app = express();

app.get('/facts', (req, res) => {
    const number = req.query.number;

    if (number && (isNaN(number) || parseInt(number) < 1)) {
        return res.status(400).json({ message: 'Invalid number parameter', success: false });
    }

    const numFacts = number ? parseInt(number) : undefined; 
    const facts = numFacts ? dogFacts.slice(0, numFacts) : dogFacts;

    return res.json({ facts, success: true });
});
;

app.use((req, res) => {
    res.status(404).json({message: 'Not Found', success: false});
});

export default app;