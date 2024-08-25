const Home = require('../models/Home')

const Delete = async(req,res)=>{
   const deleteId = req.params.deleteId
   console.log(deleteId);
   try {
    const deletedHome = await Home.findByIdAndDelete(deleteId);
    if (!deletedHome) {
      return res.status(404).json({ message: 'Home not found' });
    }
    res.status(200).json({ message: 'Home deleted successfully', deletedHome });
  } catch (error) {
    console.error('Error deleting home:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports  = {Delete};