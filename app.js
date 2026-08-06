const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.sendFile('./cleanServer/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.sendFile('./cleanServer/about.html', { root: __dirname })
})

app.get('/contact', (req, res) => {
  res.sendFile('./cleanServer/contact.html', { root: __dirname })
})

//Redirect
app.get('/contact-us', (req, res) => {
  res.redirect('contact')
})

//404 Page
//Express, Route with Order is important
app.use((req, res) => {
  res.status(404);
  res.sendFile('./cleanServer/404.html', { root: __dirname })
})

app.listen(3000, () => {
  console.log('app is running on port 3000');

})
