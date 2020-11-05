const express = require("express");
const app = express();
const morgan = require('morgan')
const postData = require('./posts/postData.js')
const postList = require('./posts/postList.js')
const postDetails = require('./posts/postDetails.js')

app.use(morgan('dev'));
app.use(express.static('resources'))

app.get('/', (req, res) => {
  const posts = postData.list()
  res.send(postList(posts))
})

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = postData.find(id);
  let postCode = postDetails(post)
  if (postCode[0] == 'fail') {
    res.status(404)
  }
  res.send(postCode[1])
});



const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
