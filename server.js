const express = require('express')
const path = require('path')

const app = express()

//setup static folder
app.use(express.static(path.join(__dirname, 'public')))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"))
// })

// let posts = [
//   { id: 1, name: 'User One', email: 'user1@mail.com' },
//   { id: 2, name: 'User Two', email: 'user2@mail.com' },
//   { id: 3, name: 'User Three', email: 'user3@mail.com' },
// ]

app.get('/api/users', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'api', 'users.json'))
})

app.listen(5000, () => console.log(`Server running on port 5000`))
