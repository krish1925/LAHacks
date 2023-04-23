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

//logging into the database
app.post('/login', async (req, res) => {
    const client = new MongoClient(uri);
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db('app-data');
        const users = database.collection('users');

        const user = await users.findOne({ email });

        const correctPassword = await bcrypt.compare(password, user.hashed_password);

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            });
            return res.status(201).json({ token, userId: user.user_id });
        }

        // Moved the following line inside the if block
        // Added a return statement to prevent sending another response
        return res.status(400).send('Invalid Credentials');

    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
});

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

app.post('/posts', async (req, res) => {
  try {
    const userData = req.body;
    const db = client.db('app-data');
    const users = db.collection('posts');
    const result = await users.insertOne(userData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

app.get('/posts',async(req,res)=> {
  const client = new MongoClient(uri)
  try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('posts')
      const returnedUsers = await users.find().toArray()
      res.send(returnedUsers)
  } finally{
      await client.close()
  }

} )

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
