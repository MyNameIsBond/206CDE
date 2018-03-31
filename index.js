
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
			res.render('home', coins)
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


app.get('/:time/:cc_value/:c_value', (req, res) => {
	let cc_value = req.params.cc_value
	let c_value = req.params.c_value

	switch (req.params.time) {

		case 'week':
			dates(7, cc_value, c_value).then(allData => {
				res.send(allData)
			})
			break

		case 'month':
			dates(30, cc_value, c_value).then(allData => {
				res.send(allData)
			})
			break

		case '6months':
			dates(182, cc_value, c_value).then(allData => {
				res.send(allData)
			})
			break

		case 'year':
			dates(360, cc_value, c_value).then(allData => {
				res.send(allData)
			})
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
				price: price[c_value],
				date: `${ccdate.getDate()}-${ccdate.getMonth()}-${ccdate.getFullYear()}`
			})
		}

	} catch (error) {
		console.log(error)
	}
	return allData
}

// async function histdata() {
// 	const let k = await fetch()
// }


async function fetchNames() {
	let names = new Array()
	try {
		let responce = await cc.coinList()
		for (const n in responce.Data) {
			console.log(typeof res)
			names.push({
				name: responce.Data[n].FullName,
				symbol: responce.Data[n].Symbol,
				url: `https://www.cryptocompare.com${responce.Data[n].ImageUrl}`,
				today: new Date().getTime(),
			})
		}
	} catch (error) {
		console.log(error)
	}
	return names
}


app.get('/cc-list', (req, res) => {
	fetchNames().then(names => {
		res.render('cc-list', { 'names': names })
	}).catch(console.error)
})


app.get('/loginform', (req, res) => {
	res.render('loginform')
})



app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})


async function getInfo() {
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value

	for (i = 0; i < Users.length; i++) {
		if (username == Users[i].username && password == Users[i].password) {
			console.log(username + 'is logged in!!!')
		}
		console.log("incorrect username or password")
		return
	}
	console.log('Incorrect username or password')
}

// app.get('/query', (req, res) => {
// 	Users.find({username: `${username}` , pass:`${pass}`}, (err, user) => {
// 		res.render('base', {
// 			email: 'email',
// 			username: 'username'
// 		})
// 	})
// })

