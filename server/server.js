const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const clientDir = path.resolve(path.dirname(__dirname), "client");

app.use(express.static(path.resolve(clientDir, "asset")));



app.get('/', (req, res)=>{
    const indexPath = path.join(clientDir, "index.html");
    res.sendFile(indexPath);
});

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});