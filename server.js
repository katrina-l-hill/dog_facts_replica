// server.js

// Add your code here
const express = require("express");
const dogFacts = require("./dog_facts");
const app = express();
const port = 3000;

app.get("/facts", (req, res) => {
    const { number } = req.query;
    if (number < 1) {
        return res.status(400).json({message: "Invalid number parameter", success: false});
    }
    return res.json({facts: dogFacts.slice(0, number), success: true});
});

app.use((req, res) => {
    res.status(404).json({message: "Not Found", success: false});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


export default server;
