const express = require ('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', { title: 'kinda sus', message: 'Click on the cat', name: 'Frank', p1: 'Age: 7', p2: 'Weight 5kg'})
})


app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}')
});