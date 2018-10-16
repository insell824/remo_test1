const express = require('express');
const app = express();

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('Hello World!!');
    res.render("index");
});

app.get('/styles.css', (req, res) => {
    //res.send('Hello World!!');
    res.render("style.css");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});

