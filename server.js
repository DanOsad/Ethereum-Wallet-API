const express = require('express')
const bodyParser = require('body-parser')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

let addresses = []

// if (!localStorage.getItem('Wallets')) {
//     localStorage.setItem('Wallets', [])
// }

app.listen(PORT, console.log(`Listening on port ${PORT}`))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

async function apiCall(addresses, key){
    let address = ''
    addresses.forEach(wallet=>address += `${wallet},`)
    const url = `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${key},` 
    try{
        const response = await fetch(url)
        const data = await response.json()
        for (let i=0; i<addresses.length; i++) {
            console.log(`Address: ${data.result[i]['account']}, Balance: ${data.result[i]['balance']}`)
        }
    }catch(error){
        console.log(error)
    }
}

async function getEthPrice(){
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data[0]['current_price'])
    }catch(error){
        console.log(error)
    }
}

app.post('/api', (req,res) => {
    const eth_key = process.env.KEY
    const wallets = req.body.wallets
    const ethPrice = getEthPrice()
    // apiCall(wallets, eth_key)

})

/* 

1) front end makes '/api' get request
2) store in wallets in localstorage
3) make etherscan api call
4) make coingecko api call
5) display values in DOM

*/