const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 80

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen('8080', () => console.log('Server running on port 8080'))
