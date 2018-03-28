'use strict'

const path = require('path')
const express = require('express')
const app = express()
const port = 8080
const https = require('https')
const cc = require('cryptocompare')
global.fetch = require('node-fetch')
const mongoose = require('mongoose')


// Directories.
app.use('/static', express.static(path.join(__dirname, 'static')))
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

// mongoose.connect('mongodb://localhost/CCT', error => {
// 	console.log(error)
// })


// let Users = require('./models/ccschema')

// Home Page
app.get('/', (req, res) => {
	cc.coinList()
		.then(coinList => {
			let data = coinList.Data
			let ccoin_names = new Array()
			const coin_names = ['USD', 'EUR', 'GBP', 'CNY']
			for (const coin in data) {
				ccoin_names.push({
					Name: data[coin].Name,
					FullName: data[coin].FullName
				})
			}
			ccoin_names.sort()
			let coins = {
				ccoin_names: ccoin_names,
				coin_names: coin_names,
			}
			res.render('base', coins)
		})
		.catch(console.error)
})


// graph url
app.get('/names', (req, res) => {
	cc.coinList()
		.then(coinList => {
			let data = coinList.Data

			let coin_names = new Array()
			for (const coin in data) {
				coin_names.push(data[coin].FullName)
			}
			console.log(coin_names)
			res.send(coin_names)
		})
		.catch(console.error)
})



// User interface
app.get('/graph/:crupto/:currency', (req, res) => {
	cc.priceFull(req.params.crupto, req.params.currency)
		.then(prices => {
			res.send(prices)
		})
		.catch(console.error)

})


app.get('/:time/:cc_value/:c_value', (req, res, dates) => {
	let cc_value = req.params.cc_value
	let c_value = req.params.c_value

	switch (req.params.time) {

		case 'week':
			let d = await dates(7, cc_value, c_value)
			console.log(d)
			res.send(d)
			break

		case 'month':
			res.send(dates(30, cc_value, c_value))
			break

		case '6months':
			res.send(dates(182, cc_value, c_value))
			break

		case 'year':

			res.send(dates(365, cc_value, c_value))
			break
	}
})





async function dates(day, cc_value, c_value) {

	let allData = new Array()
	let today = new Date()
	let oneday = 86400000

	try {

		for (let i = 0; i < day; i++) {
			let ccdate = new Date(today.getTime() - oneday)
			let price = await cc.priceHistorical(cc_value, c_value, ccdate)
			oneday += 86400000
			allData.push({
				price: price,
				date: `${ccdate.getDate()}-${ccdate.getMonth()}-${ccdate.getFullYear()}`
			})
		}

	} catch (error) {
		console.log(error)
	}
	return allData
}



// app.get('/query', (req, res) => {
// 	Users.find({username: `${username}` , pass:`${pass}`}, (err, user) => {
// 		res.render('base', {
// 			email: 'email',
// 			username: 'username'
// 		})
// 	})
// })

app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})