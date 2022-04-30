import express from 'express'

const app = express()

app.get('/hello', (request, response) => {
  response.json({'Hello': 'Wodrld'})
})

export default app
