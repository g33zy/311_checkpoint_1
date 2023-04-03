const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const users = require('./routes/users')

app.use(express.json())

app.use(users);



app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})