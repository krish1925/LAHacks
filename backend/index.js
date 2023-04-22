const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 8000;
const uri = 'mongodb+srv://krishhnpatel:Hello123@cluster0.ndlbumc.mongodb.net/?retryWrites=true&w=majority';

app.use(cors()) // Use this after the variable declaration

app.get('/',(req,res)=> {
    res.json("Hello to my app")
})

// create a single MongoClient instance to reuse for all database operations
const client = new MongoClient(uri);

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
  })

app.post('/users', async (req, res) => {
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
  })




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
