const Contact = require('../../models/contact')

const getContacts = async (req, res, next) => {
    try {
      const {_id: owner} = req.user
      const {page = 1, limit = 20, favorite}  = req.query
        
      let filter = {owner}
      if (typeof(favorite) === "string") {
        filter = {owner, favorite}
      } 
   
      const skip = (page - 1) * limit
      const data = await Contact.find({...filter}, "name email phone", {skip, limit, favorite }).select("favorite")
      .populate("owner", "email")
      
      res.status(200).json(data)
    } 
    catch (error) {
      next(error)
    }
  }

module.exports = getContacts