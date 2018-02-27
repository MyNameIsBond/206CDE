'use strict'

const path 		= require('path')
const express = require('express')
const app 		= express()
const port 		= 8080
// sdds

// Directories.
const options = {
	host 	: url,
	port	: 8080,
	path 	: 'type the url here'
}
app.use('/static',express.static(path.join(__dirname,'static')))
app.set('views',path.join(__dirname,'templates'))
app.set('view engine','pug')


// Home Page
app.get('/', (req,res) => {
	res.render('base',{
		title : 'home'
	})
})


// this is the graph
app.get('/graph', (req,res) => {
	res.send('Done!')
})


// User interface
app.get('/user', (req,res) => {
	res.render('base',{
		title : 'user'
	})
})

app.get('/test/<hello>', (req,res) => {
	res.send('hello')
	console.log('test')
	console.log(hello)
})

app.get('/test2', (req,res) => {
	res.send('Done!')
})




app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})


//nodemon
//bower
