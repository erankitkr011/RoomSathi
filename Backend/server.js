process.env.SUPPRESS_NO_CONFIG_WARNING = 'true';
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.listen(3300,()=>{
    console.log("server started at local host 3300");
})

app.use(express.json());

//! connection of database ---

const connectDatabase = require('./config/database');
connectDatabase();

//! routes -----
const user = require('./routes/user');
const c = require('config');
app.use(user);

app.get('/',(req,res)=>{
    res.send("home pge")
})

const Home = require('./models/Home');
app.post('/add-home', async (req, res) => {
  try {
    // Retrieve user_id from the request or session
    const userId = req.body.userId;

    // Log userId to debug
   // console.log('User ID:', userId);

    if (!userId) {
      throw new Error('User ID is required');
    }

    const homeData = {
      ...req.body,
      owner: userId,
    };

    const home = new Home(homeData);
    console.log(home);

    await home.save();
    res.status(201).send(home);
  } catch (error) {
    console.error('Error saving home:', error); // Log error
    res.status(400).send(error);
  }
});

app.get('/ownerdata/:ownerId',async(req,res)=>{
  const ownerId = req.params.ownerId;
  console.log('Owner ID:', ownerId);
  try {
     let deatils = Home.find({owner:ownerId});
     console.log(deatils)
  } 
  catch (error) {
    
  }

})