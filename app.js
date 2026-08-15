const express = require('express')

const app = express()
app.set('views', './views')
app.set('view engine','ejs')

// app.get('/', (req, res) => {
//   res.sendFile('./cleanServer/home.html', { root: __dirname })
// })

// app.get('/', (req, res) =>{
//   res.render('home', {
//     name : "G Lay",
//     age : 23
//   })
// })

app.use((req,res,next) =>{
  console.log('First Middleware is running');
  next();
})

app.get('/', (req,res) =>{
  let blogs = [
    {title : 'Blog Title 1', intro : 'This is blog intro 1'},
    {title : 'Blog Title 2', intro : 'This is blog intro 2'},
    {title : 'Blog Title 3', intro : 'This is blog intro 3'}
  ];

  res.render('home',{
    blogs : blogs,
    title : 'Home'
  })
});

app.get('/contact', (req, res) =>{
  res.render('contact', {
    title : 'Contact'
  })
})

app.get('/about', (req, res) =>{
  res.render('about', {
    title : 'About'
  })
})

//Redirect
app.get('/contact-us', (req, res) => {
  res.redirect('contact')
})

//404 Page
//Express, Route with Order is important
app.use((req, res) => {
  res.status(404).render('404',{
    title : '404 not found'
  })
})

app.listen(3000, () => {
  console.log('app is running on port 3000');

})
