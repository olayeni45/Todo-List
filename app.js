const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dayFile = require('./date');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

let itemArray = new Array();
let workItems = new Array();

app.get('/', (req, res) => {
    res.render('list', { kindOfDay: dayFile.day, listTitle: dayFile.dayOfTheWeek, listItem: itemArray })
})

app.post('/', (req, res) => {
    let item = req.body.todo;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect('work');
    }
    else {
        itemArray.push(item)
        res.redirect('/');
    }

})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: "Work List", listItem: workItems })
})

app.get('/about', (req, res) => {
    res.render('about')
})


app.listen(3000, () => {
    console.log("Server running");
})
