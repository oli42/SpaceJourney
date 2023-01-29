const { User } = require('../db/sequelize')
const { Pic } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/pics', (req, res) => {
    Pic.findAll({
      include: 'User',
      // attributes: ['title']
    })
      .then(pics => {
        const message = 'User list OK.'
        res.json({ message, data: pics })
      })
  })
}