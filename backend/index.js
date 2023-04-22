const PORT = 8000
const express = require('express')
const {MongoClient} = require('mongodb')
const uri = "mongodb+srv://krishhnpatel:Hello@123@cluster0.ndlbumc.mongodb.net/?retryWrites=true&w=majority"
const app =express()

app.get('/',(req,res)=> {
    res.json("Hello to my app")

} )

app.get('/signup',(req,res)=> {
    res.json("Hello to my app")

} )

app.post('/users',(req,res)=> {
    const client = new MongoClient(uri)
    res.json("Hello to my Application")

} )

app.get('/users',(req,res)=> {
    const client = new MongoClient(uri)
    res.json("Hello to my Applications")

} )

app.listen(PORT, () => console.log("Server running on port " +PORT))

/*const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const {v4: uuidv4} = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const uri = "mongodb+srv://project:project@35lproject.3p5ldxo.mongodb.net/?retryWrites=true&w=majority"
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('hello')
}) 

//signing up to the database




app.listen(PORT, () => console.log('Server running on PORT ' + PORT)) 

*/
