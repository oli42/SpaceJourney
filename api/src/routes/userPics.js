const { User } = require('../db/sequelize')
const { Pic } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/userPics/:id', (req, res) => {
    const id = req.params.id;
    Pic.findAll({ where:{
        UserId: id
    }
    })
      .then(pics => {
        const message = `User ${id} has ${pics.length} pics.`
        res.json({ message, data: pics })
      })
  })
}