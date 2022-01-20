const express = require('express')
const router = express.Router()

const {createClassController,displayClassesController,enterClassController,deleteClassController} = require('../controller/classController')
router.post('/myClasses/create',createClassController)
router.get('/myClasses',displayClassesController)
router.delete('/myClasses/:id',deleteClassController)
router.get('/enter-class/:id',enterClassController)
module.exports = router