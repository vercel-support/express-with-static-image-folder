const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <style>img{width:100%;max-width:500px;}</style>
        <div class="images"><img src="/img/pexels-photo-2132048.jpg"/><img src="/img/pexels-photo-2261017.jpg"/><img src="/img/pexels-photo-2285317.jpg"/><img src="/img/pexels-photo-2303781.jpg"/><img src="/img/pexels-photo-2323775.jpg"/></div>
    `)
})

module.exports = app
