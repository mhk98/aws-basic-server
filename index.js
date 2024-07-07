const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from server 2')
})

app.listen(port, () => {
  console.log(`Example app 2 listening on port ${port}`)
})