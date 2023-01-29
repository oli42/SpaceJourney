const { User } = require('../db/sequelize')
const { Pic } = require('../db/sequelize')
const pics = require('./pics')
  
module.exports = (app) => {
  app.get('/users', (req, res) => {
    User.findAll({ 
     
      
    })
      .then(users => {
        const message = 'User list OK.'
        res.json({ message, data: users })
      })
  })
}