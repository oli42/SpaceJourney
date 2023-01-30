const { Pic } = require('../db/sequelize')
  
module.exports = (app) => {
    app.post('/deletePic', async (req, res)=> {

        const result = await Pic.destroy({where: { title: req.body.title, UserId: req.body.UserId}})
        if (result){
            const message = `${req.body.title} has been deleted`
            res.json({ message, data: result })
        }
        else{
            const message = `${req.body.title} doesn't exist in the database`
            res.json({ message, data: result })
        }
    })
}