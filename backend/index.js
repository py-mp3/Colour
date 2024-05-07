const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get("/" , (req, res) => {
    res.send("Hello World!");
});


app.get('/randomColour', (req, res) => {
    const colours = ["red", "blue", "purple", "pink", "orange", "green"];    
    const random = Math.floor(Math.random() * colours.length);
    return res.json({
        colour: colours[random]
    })
});

app.get('/randomNumber', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    return res.json({
        number: randomNumber
    })
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});