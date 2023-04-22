const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 8000;
const uri = 'mongodb+srv://krishhnpatel:Hello123@cluster0.ndlbumc.mongodb.net/?retryWrites=true&w=majority';

// create a single MongoClient instance to reuse for all database operations
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('hello')
}) 

app.get('/feed', (req, res) => {
    res.json('hello')
}) 

app.get('/signup', (req,res) => {
    res.json('hello')
})
app.post('/users',async(req,res)=> {
    res.json('hello')
})


app.post('/signup', async (req, res) => {
  try {
    const userData = req.body;
    const db = client.db('app-data');
    const users = db.collection('users');
    const result = await users.insertOne(userData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/users',async(req,res)=> {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')
        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } finally{
        await client.close()
    }

} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const {v4: uuidv4} = require('uuid')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// const cors = require('cors')

// app.use(cors())
// app.use(express.json())

// app.get('/',(req,res)=> {
//     res.json("Hello to my app")
// } )

// app.get('/signup',(req,res)=> {
//     res.json("Hello to my app")

// } )

// app.post('/users',(req,res)=> {
//     const client = new MongoClient(uri)
//     res.json("Hello to my Application")

// } )

// app.get('/users',async(req,res)=> {
//     const client = new MongoClient(uri)
//     try {
//         await client.connect()
//         const database = client.db('app-data')
//         const users = database.collection('users')
//         const returnedusers = await users.toArray()
//         res.send(returnedUsers)
//     } finally{
//         await client.close()
//     }

// } )

// app.listen(PORT, () => console.log("Server running on port " +PORT))

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
