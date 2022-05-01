import express from 'express'

const app = express()

app.get('/', (request, response) => {
  response.json({'Hello': 'World'})
})

app.listen(3000, () => {
  console.log('running in port 3000 OK')
})