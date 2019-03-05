import express from 'express'
import { baseApi } from './consts'
import { server } from './api'
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json());

app.get('/tv/pauseResume', (req, res) => {
  server
    .pauseResume()
    .then(data => {
      res.status(200).send('Tv paused/resumed')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/turnOn', (req, res) => {
  server.turnOn()
  res.status(200).send('Tv turned on')
})

app.get('/tv/turnOff', (req, res) => {
  server
    .turnOff()
    .then(data => {
      res.status(200).send('Tv turned off')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/mute', (req, res) => {
  server
    .mute()
    .then(data => {
      res.status(200).send('Tv muted')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/ambilight', (req, res) => {
  server
    .toggleAmbilight()
    .then(data => {
      res.status(200).send('Ambilight opened')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.post('/tv/setVolume', (req, res) => {
  server
    .setVolume(req.body.volume)
    .then(data => {
      res.status(200).send('Volume changed! :D')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/volumeUp', (req, res) => {
  server
    .volumeUp()
    .then(data => {
      res.status(200).send('Volume increased')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/volumeDown', (req, res) => {
  server
    .volumeDown()
    .then(data => {
      res.status(200).send('Volume decreased')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

app.get('/tv/skip', (req, res) => {
  server
    .skipNetflix()
    .then(data => {
      res.status(200).send('Intro skipped')
    })
    .catch(error => {
      res.status(500).send(`Server error: ${error}`)
    })
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
