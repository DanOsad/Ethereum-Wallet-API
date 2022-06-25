const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cors = require('cors')
require('dotenv').config()
const PORT = 8000

app.use(cors())
app.use(express.json())

async function usdcApiCall(key, address) {
    const contractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    try{
        const response = await fetch(`https://api.etherscan.io/api?contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${key}&module=account&action=tokenbalance`)
        const data = await response.json()
        return data.result
    }catch(error){
        console.log(error)
    }
}

async function ethApiCall(key, addresses) {
    try{
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=balancemulti&address=${addresses}&tag=latest&apikey=${key}`)
        const data = await response.json()
        return data.result
    }catch(error){
        console.log(error)
    }
}



async function getEthPrice(){
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data[0]['current_price']
    }catch(error){
        console.log(error)
    }
}

const usdcToFiat = 10**-6

const weiToEth = num => num * 10**-18

app.get('/api/:addresses', async (req, res) => {
    const ethPrice = await getEthPrice()
    const key = process.env.KEY
    const address = req.params.addresses
    const data = await ethApiCall(key, address)
    let balanceObj = {}
    for (let i=0; i<data.length; i++) {
        let wallet = data[i].account
        balanceObj[`${wallet}`] = {}
        balanceObj[`${wallet}`].balance = weiToEth(data[i].balance) // IN ETH
        balanceObj[`${wallet}`].value = balanceObj[`${wallet}`].balance * ethPrice // IN USD
        balanceObj[`${wallet}`].usdc =  await usdcApiCall(key, wallet) * usdcToFiat //usdcToFiat(usdcApiCall(key, wallet))
    }
    res.json(balanceObj)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})