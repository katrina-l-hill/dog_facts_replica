// app.js

// Add your code here
import express from "express";
import dogFacts from "./dog_facts.js";

const app = express();

app.get('/facts', (req, res) => {
    const number = parseInt(req.query.number);
    if (number !== undefined) {
        number = parseInt(number, 10);
        if (isNaN(number) || number < 1) {
          return res.status(400).json({ message: "Invalid number parameter", success: false });
        }
        return res.json({ facts: dogFacts.slice(0, number), success: true });
      }
    
      res.json({ facts: dogFacts, success: true });
    });

app.use((req, res) => {
    res.status(404).json({message: 'Not Found', success: false});
});

export default app;
