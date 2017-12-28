const express = require('express')

const app = express()
const Web3 = require('web3')

const web3 = new Web3('http://localhost:8545')

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.get('/accounts', (req, res) => {
  web3.eth.getAccounts().then(accounts => {
    res.send(accounts)
  })
})

app.listen(3000)
