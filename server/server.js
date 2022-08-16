const express = require('express')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const cors = require('cors')
require('dotenv').config()
const PORT = 8000

app.use(cors())
app.use(express.json())

const usdcApiCall = async (key, address) => {
    const contractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    try{
        const response = await fetch(`https://api.etherscan.io/api?contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${key}&module=account&action=tokenbalance`)
        const data = await response.json()
        return data.result
    }catch(error){
        console.log(error)
    }
}

const ethApiCall = async (key, addresses) => {
    try{
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=balancemulti&address=${addresses}&tag=latest&apikey=${key}`)
        const data = await response.json()
        return data.result
    }catch(error){
        console.log(error)
    }
}

const getEthPrice = async () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data[0]['current_price']
    }catch(error){
        console.log(error)
    }
}

const convertUsdcToUsd = num => {
    return num * 10**-6
}

const convertWeiToEth = num => {
    return num * 10**-18
}

const cleanAddresses = str => {
    return str.split('').filter(elem => elem !== ' ').join('')
}

app.get('/api/:addresses', async (req, res) => {
    const ethPrice = await getEthPrice()
    const ethKey = process.env.ETH_KEY
    const usdcKey = process.env.USDC_KEY
    const walletAddresses = cleanAddresses(req.params.addresses)
    const etherscanData = await ethApiCall(ethKey, walletAddresses)
    let walletList = []
    for (let i=0; i<etherscanData.length; i++) {
        let address = etherscanData[i].account
        let usdcValue = await usdcApiCall(usdcKey, address)
        let wallet = {  
                        address: address,
                        ethBalance: convertWeiToEth(etherscanData[i].balance),
                        usd: convertWeiToEth(etherscanData[i].balance) * ethPrice,
                        usdcBalance: convertUsdcToUsd(usdcValue)
                    }
        walletList.push(wallet)
    }
    console.log(walletList)
    res.status(200).json(walletList)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})