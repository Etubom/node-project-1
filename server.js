const express = require('express')
const path = require('path')

const app = express()

//setup static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'api', 'users.json'))
})

app.listen(5000, () => console.log(`Server running on port 5000`))
