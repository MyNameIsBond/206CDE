'use strict'

const path 		= require('path')
const express 	= require('express')
const app 		= express()
const port 		= 8080


// Directories.
app.use(express.static(path.join(__dirname,'static')))
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
	res.render('base',{
		title : 'graph'
	})
})


// User interface
app.get('/user', (req,res) => {
	res.render('base',{
		title : 'user'
	})
})



app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})
