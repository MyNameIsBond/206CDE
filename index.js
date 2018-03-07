'use strict'

const path 		= require('path')
const express 	= require('express')
const app 		= express()
const port 		= 8080
const https 	= require('https')
const cc 		= require('cryptocompare')
global.fetch 	= require('node-fetch')



// Directories.
app.use('/static',express.static(path.join(__dirname,'static')))
app.set('views',path.join(__dirname,'templates'))
app.set('view engine','pug')



// Home Page
app.get('/', (req,res) => {  
	cc.coinList()
	.then(coinList => {
		let data = coinList.Data
		let ccoin_names = new Array()
		const coin_names = ['USD','EUR','GBP']
		for (const coin in data) {
				ccoin_names.push({Name:data[coin].Name,FullName:data[coin].FullName})
		}
		ccoin_names.sort()
		let coins = {
			ccoin_names : ccoin_names,
			coin_names  : coin_names,
		}
		res.render('base', coins )
	})
	.catch(console.error)
})


// graph url
app.get('/names', (req,res) => {
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
app.get('/graph/:crupto/:currency', (req,res) => {
	cc.priceFull(req.params.crupto,req.params.currency)
	.then (prices => {
		res.send(prices)
	})
	.catch(console.error)

})

app.get('/time/:time', (req,res) => {
	if (req.params.time === 'week') {
		res.send('get back 7 days')
	} else if(req.params.time ==='month') {
		res.send('get back 30 days')
	} else if (req.params.time === 'year'){
		res.send('get back 364 or 365 if its a leap year')
	} else {

		res.send('back end erro with time ')
	}
	
})

app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})


//nodemon
//bower
//node-fetch
//cryptocompare
