const express = require('express')
const mongodb = require("mongodb")
const app = express()
const port = 3000

const MONGO_URI = "mongodb://minisforum:27017"

app.use(express.static('docs'))

app.get('/helo', async (req, res) => {
  const client = new mongodb.MongoClient(MONGO_URI)
  await client.connect()
  const db = client.db("xmail")
  const users = db.collection("users")
  const data = await users.find({}).toArray()
  res.write(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})

