const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cors = require('cors')
require('dotenv').config()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/api/:addresses', async (request, response) => {
    const key = process.env.KEY
    const address = request.params.addresses
    async function apiCall(key, addresses) {
        try{
            const response = await fetch(`https://api.etherscan.io/api?module=account&action=balancemulti&address=${addresses}&tag=latest&apikey=${key}`)
            const data = await response.json()
            return data
        }catch(error){
            console.log(error)
        }
    }
    response.json(await apiCall(key, address))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})