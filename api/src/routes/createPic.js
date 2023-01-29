const { Pic } = require('../db/sequelize')


module.exports = (app) => {
    app.post('/createPic', async (req, res)=> {
        
        const [pic, created] = await Pic.findOrCreate({where: { title: req.body.title, UserId: req.body.UserId}});
        if (created){
            const message = `${req.body.title} created`
            res.json({ message, data: pic})
        }
        else{
            const message = `${req.body.title} already exists`
            res.json({ message, data: pic })
        }
    })
}