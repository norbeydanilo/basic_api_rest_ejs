/* eslint-disable no-unused-vars */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./src/swagger.json')
const cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 3000
const host = process.env.HOST

// Conexión a Base de datos
const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.n8i0ul0.mongodb.net/${process.env.DBNAME}`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Database connected'))
	.catch(e => console.log(e))

// motor de plantillas del lado del server
app.set('view engine', 'ejs')

app.set('views', __dirname + '/src/views')

app.use(express.static(__dirname + '/src/public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// cors
app.use(cors())

// Rutas Web
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: false, tryItOutEnabled: false }))
app.use('/', require('./src/router/RutasWeb'))
app.use('/mascotas', require('./src/router/Mascotas'))

app.use((req, res, next) => {
	res.status(404).render('404', {
		titulo: '404',
		descripcion: 'Page Not Found...'
	})
})

app.listen(port, () => {
	console.log(`Server started at ${port}`)
	console.log(`Go to http://${host}:${port}`)
})
