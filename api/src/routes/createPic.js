const { Pic } = require('../db/sequelize')


module.exports = (app) => {
    app.post('/createPic', async (req, res)=> {

        const result = await Pic.findOne({where: { title: req.body.title, UserId: req.body.UserId}})
        if (result){
            const message = `${req.body.title} already exists`
            console.log('Already exists')
            res.json({ message, data: result })
        }
        else{
            const result = await Pic.create(req.body)
            const message = `${req.body.title} created`
            res.json({ message, data: result})
        }
        // const [pic, created] = await Pic.findOrCreate({where: { title: req.body.title, UserId: req.body.UserId}});
        // if (created){
        //     const message = `${req.body.title} created`
        //     res.json({ message, data: pic})
        // }
        // else{
        //     const message = `${req.body.title} already exists`
        //     res.json({ message, data: pic })
        // }
    })
}