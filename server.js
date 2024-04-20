import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, resp) => {
    resp.send('Olá mundo!!')
})

app.get('/user', (req, resp) => {
    resp.json({name: 'Test', age: '28'})
})

app.listen(port, () => {
    console.log(`Server works in the port ${port}`)
})

