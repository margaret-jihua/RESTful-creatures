const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/prehistoric_creatures', require('./controllers/prehistoric_creatures'))

//home route
app.get('/', (req,res) => {
    res.render('home')
})

app.listen(8000)