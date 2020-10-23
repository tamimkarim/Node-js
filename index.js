const express = require('express');


const app = express();

// const rootCall = (req, res) =>res.send('Thank you very much');


app.get('/', (req, res) =>{
    res.send("I know how to open node")
})

app.listen(3200, () => console.log('Listening to port 3000'));
