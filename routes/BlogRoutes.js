const express = require('express');

const router = express.Router();

router.get("/blogs", async (req, res) => {
  // let blogs = [
  //   {title : 'Blog Title 1', intro : 'This is blog intro 1'},
  //   {title : 'Blog Title 2', intro : 'This is blog intro 2'},
  //   {title : 'Blog Title 3', intro : 'This is blog intro 3'}
  // ];
  let blogs = await Blog.find().sort({ createdAt: -1 });
  console.log(blogs);

  res.render("home", {
    blogs: blogs,
    title: "Home",
  });
});

router.post("/blogs", async (req, res) => {
  let { title, intro, body } = req.body;

  let blog = new Blog({
    title,
    intro,
    body,
  });

  await blog.save();

  res.redirect("/");
});