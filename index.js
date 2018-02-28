'use strict'

const path 		= require('path')
const express 	= require('express')
const app 		= express()
const port 		= 8080
const https 	= require('https')
const cc 		= require('cryptocompare')
global.fetch 	= require('node-fetch')
// sdds

// Directories.
app.use('/static',express.static(path.join(__dirname,'static')))
app.set('views',path.join(__dirname,'templates'))
app.set('view engine','pug')


// Home Page
app.get('/', (req,res) => {
	res.render('base',{
		title : 'home'
	})
})


// graph url
app.get('/graph', (req,res) => {
	cc.coinList()
	.then(coinList => {
		let data = coinList.Data
		res.send(data)
	})
	.catch(console.error)
})


// User interface
app.get('/graph/:cryptoc/:currency', (req,res) => {
	let args = {
		arg	:req.params.cryptoc,
		arg2:req.params.currency
	}
	res.send(args)
})





app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})

// libraries I'm using.
//nodemon
//bower
//node-fetch
//cryptocompare
