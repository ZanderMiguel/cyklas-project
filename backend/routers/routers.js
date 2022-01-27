const express = require('express')
const router = express.Router()

const {createClassController,
    displayClassesController,
    enterClassController,
    deleteClassController} = require('../controller/classController')
const {teleController} = require('../controller/teleconController')
router.post('/myClasses/create',createClassController)
router.get('/myClasses',displayClassesController)
router.delete('/myClasses/:id',deleteClassController)
router.get('/enter-class/:id',enterClassController)
router.get('/telecon/create',teleController)
module.exports = router