const { User } = require('../db/sequelize')
const bcrypt = require('bcrypt')

module.exports = (app) => {
  app.post('/login', (req, res) => {
  
    User.findOne({ where: { email: req.body.email } }).then(user => {
      bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
        if(isPasswordValid) {
          const message = `User is connected`;
          return res.json({ message, data: user })
        }
        else{
          const message = `A problem occurred. `;
          return res.json({ message, data: user })
        }
      })
    })
  })
}