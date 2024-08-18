
const Home = require('../models/Home')

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

module.exports = {allData}