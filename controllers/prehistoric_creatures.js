var express = require('express')
var router = express.Router()
const fs = require('fs')

router.use(express.urlencoded({extended:false}))

router.get('/', (req, res) => {
  let prehistoricCreatures = fs.readFileSync('./prehistoric_creatures.json')
  let preCreatureData = JSON.parse(prehistoricCreatures)
  res.render('prehistoric_creatures/index', {preCreatures: preCreatureData})
})

router.get('/:id', (req,res) => {
  let prehistoricCreatures = fs.readFileSync('./prehistoric_creatures.json')
  let preCreatureData = JSON.parse(prehistoricCreatures)
  let preCreatureIndex = parseInt(req.params.id)
  res.render('prehistoric_creatures/show', {preCreature: preCreatureData[preCreatureIndex]})
})

module.exports = router
