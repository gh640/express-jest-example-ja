import express from 'express'

import hello from './handlers/hello.js'

const app = express()

app.get(`/`, hello)

export default app
