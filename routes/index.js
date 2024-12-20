//AQUI VAMOS A SETEAR TODAS LAS RUTAS PARA LA APLICACION
const express = require('express')
const app = express()
const router = express.Router()

const path = require('path')
const viewspatch = path.join(__dirname,'/views')
app.set('views', viewspatch)
app.set('view engine', 'ejs')

//Obtenemos la ruta principal con esta funcion
router.get('/', (req, resp)=>{
    resp.render('index')
    //console.log(__dirname)
    //este index representa a este index para pasaarle el view
})


module.exports = router