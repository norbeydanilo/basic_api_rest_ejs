const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.render('index', { titulo: 'Bienvenido a mi primera página EJS' })
})

router.get('/servicios', (req, res) => {
	res.render('servicios', { tituloServicios: 'Este es un mensaje dinámico de servicios' })
})

router.get('/crear', (req, res) => {
	res.render('crear')
})

module.exports = router
