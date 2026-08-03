const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile('./cleanServer/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>')
})

app.listen(3000, () => {
  console.log('app is running on port 3000');

})
