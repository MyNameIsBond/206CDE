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
		const coin_names = ['USD','EUR','GBP','CNY']
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
	let time = req.params.time
	cc.priceHistorical('BTC', 'USD', time  => {
		let oneday = 86400000
		switch (time) {
			case month:
			weeka = new Array()			
			for (let i = 0; i < 30; i++) {
				const something = new Date(today.valueOf() - oneday) 
				console.log(something)
				oneday += 86400000
				}
				break
			case year:
			weeka = new Array()			
			for (let i = 0; i < 30; i++) {
				const something = new Date(today.valueOf() - oneday) 
				console.log(something)
				oneday += 86400000
				}
				break

			case week:
			weeka = new Array()
			for (let i = 0; i < 7; i++) {
				const something = new Date(today.valueOf() - oneday) 
				console.log(something)
        		oneday += 86400000
				}
				break
		}
	})
	.then(prices => {
		console.log(prices)
		res.send(prices)
	})
	.catch(console.error)
})



app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})


//nodemon
//bower
//node-fetch
//cryptocompare
