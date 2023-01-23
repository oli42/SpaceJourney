const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const port = 4000


app
    .use(cors())
    .use(morgan('dev'))


app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`app has started : http://localhost:${port}`))
