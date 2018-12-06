const http = require('http')

const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
	res.write("Users")
	res.end()
})

app.use((req, res, next) => {
	res.write("Home")
	res.end()
})



app.listen(3000)
