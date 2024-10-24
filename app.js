const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {append} = require('express/lib/response');
const res = require('express/lib/response');
const app = express();
const PORT = 3500;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'views', 'main.html'));
});