'use strict'

const path 		= require('path')
const express 	= require('express')
const app 		= express()
const port 		= 8080



// Directories.
app.use(express.static('static'))
app.set('views',path.join(__dirname,'templates'))

app.set('view engine','pug')


app.get('/', (req,res) => {
	res.render('base',{
		title : 'title'
	})

})




app.listen(port, () => {
	console.log(`Server runs at ${port}`)
})
