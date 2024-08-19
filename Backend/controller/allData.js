
const Home = require('../models/Home')

//! sending all data 
const allData = async(req,res)=>{
    try {
        const homes = await Home.find();
        res.status(200).json({
            homes:homes
        });
        
    } catch (error) {
         res.status(400).json({
            message:"Error finding data"
         })
    }
}

//! allowing to add home for owner

const addHome = async (req,res)=>{
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
}

//! sending owner room details

const ownerData = async (req,res)=>{
    const ownerId = req.params.ownerId;
    //console.log('Owner ID:', ownerId);
    try {
      const homes = await Home.find({ owner: ownerId });
     // console.log(homes)
      res.json(homes);
    } catch (error) {
      res.status(400).send({ message: "Error finding data", error });
    }
}

module.exports = {allData,addHome,ownerData}