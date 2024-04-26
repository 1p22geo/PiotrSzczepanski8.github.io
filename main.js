const express = require('express')
const app = express()
const port = 3000

app.use(express.static('docs'))

app.get('/helo', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})

