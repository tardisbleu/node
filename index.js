const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! 3')
})

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})
