const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5500;
const app = express();

app.listen(port, () => {
    console.log(`Listening on PORT: ${port} 🌩🌩🌩 `)
});