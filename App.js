const app = require('express')()

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: __dirname})
})

app.listen('8080', () => console.log('Server running on port 8080'))
