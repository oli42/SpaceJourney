const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./src/db/sequelize')
// require('./src/models/relations')

const app = express()
const port = 4000


app
    .use(morgan('dev'))
    .use(cors())
    .use(bodyParser.json())
    

sequelize.initDb()

require('./src/routes/users')(app)
require('./src/routes/pics')(app)
require('./src/routes/createUser')(app)
require('./src/routes/login')(app)
require('./src/routes/createPic')(app)
require('./src/routes/userPics')(app)
require('./src/routes/deletePic')(app)
require('./src/routes/userById')(app)

app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
      res.status(404).json({message});
  });

app.get('/', (req, res) => res.send('Hello'))



app.listen(port, () => console.log(`app has started : http://localhost:${port}`))
