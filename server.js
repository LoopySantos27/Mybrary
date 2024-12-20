//Esto es para importar el .env en caso de ser un ambiente de desarrollo
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//Importar las librerias para la app
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

//#region ESTO ES LO QUE NECESITAMOS PARA QUE CORRA EL SERVER
//Setear las views de la pagina, El como se verá pues
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
//Setear cual va a ser nuestro archivo de los layouts y para evitar duplicar codigo html
app.set('layout', 'layouts/layout')
//Llamar a la libreria express layouts
app.use(expressLayout)
//Definir donde vamos a guardar las archivos publicas
app.use(express.static('public'))

const mongoose = require('mongoose') 
//Hacer la conexión a la base de datos que esté en la web
mongoose.connect(process.env.DATABASE_URL,{})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
app.use('/', indexRouter)

//Decirle que queremos saber en que port esta la app (En este caso lo haremos en el 3000)
app.listen(process.env.PORT || 2000)
//#endregion 