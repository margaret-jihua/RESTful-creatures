const express = require('express')
const router = express.Router()
const fs = require('fs')

router.use(express.urlencoded({extended:false}))

// index route
router.get('/', (req,res) => {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)

    let nameFilter = req.query.nameFilter
    if (nameFilter){
        dinoData = dinoData.filter((dino) => {
            return dino.name.toLowerCase() === nameFilter.toLowerCase()
        })
    }
    // render
    res.render('dinosaurs/index', {myDinos: dinoData})
})

router.get('/new', (req,res) => {
    res.render('dinosaurs/new')
})

router.get('/:id', (req,res) => {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    let dinoIndex = parseInt(req.params.id)
    res.render('dinosaurs/show', {myDino: dinoData[dinoIndex]})
})

router.post('/', (req,res) => {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs)
    // push new dino to array
    dinoData.push(req.body)
    // convert dinodata to JSON
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
    // redirect to index get route
    res.redirect('./dinosaurs')
})

module.exports = router