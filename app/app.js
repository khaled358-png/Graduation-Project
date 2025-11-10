const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const catImage = response.data[0].url;
        res.send(`
            <h1>Random Cat 🐱</h1>
            <img src="${catImage}" alt="Random Cat" width="400"/>
        `);
    } catch (error) {
        res.status(500).send('Error fetching cat image');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

