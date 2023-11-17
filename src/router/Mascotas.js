const express = require('express')
const router = express.Router()

const Mascota = require('../models/mascotas')

router.get('/', async (req, res) => {
	try {
		const arrayMascotasDB = await Mascota.find() // Mongoose method
		console.log(arrayMascotasDB)

		res.render('mascotas', { status: 'success', arrayMascotas: arrayMascotasDB })

	} catch (error) {
		console.log(error)
	}
})

// Método 1
router.post('/', async (req, res) => {
	const body = req.body
	try {
		const mascotaDB = new Mascota(body)
		await mascotaDB.save() // Mongoose method

		res.redirect('/mascotas')
	} catch (error) {
		console.log('error', error)
	}
})

/*
// Método 2
router.post('/', async (req, res) => {
  const body = req.body
  console.log(body)
  try {
	await Mascota.create(body)
	res.redirect('/mascotas')
  } catch (error) {
	console.log('error', error)
  }
})
*/

router.get('/:id', async (req, res) => {
	const id = req.params.id
	try {
		const mascotaDB = await Mascota.findOne({ _id: id }) // Mongoose method
		console.log(mascotaDB)

		res.render('detalle', {
			mascota: mascotaDB,
			error: false
		})
	} catch (error) {
		console.log('Error', error)
		res.render('detalle', {
			error: true,
			mensaje: 'No se encuentra el documento...'
		})
	}
})

router.delete('/:id', async (req, res) => {
	const id = req.params.id
	// console.log(`id desde backend ${id}`) 
	try {
		const mascotaDB = await Mascota.findByIdAndDelete({ _id: id }) // Mongoose method
		// console.log(mascotaDB)

		// https://stackoverflow.com/questions/27202075/expressjs-res-redirect-not-working-as-expected
		// res.redirect('/mascotas')
		if (!mascotaDB) {
			res.status(404).json({
				elemento: id,
				estado: false,
				mensaje: 'no se ha podido eliminar'
			})
		} else {
			res.status(200).json({
				elemento: id,
				estado: true,
				mensaje: 'eliminado!'
			})
		}
	} catch (error) {
		console.log(error)
	}
})

router.put('/:id', async (req, res) => {
	const id = req.params.id
	const body = req.body

	// console.log(`Id: ${id}`)
	// console.log(`body ${body}`)

	try {
		const mascotaDB = await Mascota.findByIdAndUpdate( // Mongoose method
			id, body, { useFindAndModify: false }
		)
		console.log(mascotaDB)
		res.status(200).json({
			elemento: id,
			estado: true,
			mensaje: 'ha sido editado'
		})
	} catch (error) {
		console.log(error)
		res.status(404).json({
			elemento: id,
			estado: false,
			mensaje: 'no ha sido editado'
		})
	}
})

module.exports = router
