const { User } = require('../db/sequelize')
const { Pic } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/userById/:id', (req, res) => {
    const userId = req.params.id;
    User.findOne({ where:{
        id: userId
    }
    })
      .then(user => {
        const message = `User ${user.id} found.`
        res.json({ message, data: user })
      })
  })
}