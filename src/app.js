import express from 'express'

import hello from './handlers/hello.js'
import reverse from './handlers/reverse.js'

const app = express()

app.use(express.json())

app.get(`/`, hello)
app.get(`/reverse`, reverse)

export default app
