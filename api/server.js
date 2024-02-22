const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const router = require('./routes/router')

app.use(cors())
app.use(express.json())

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = app