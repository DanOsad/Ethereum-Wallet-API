const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
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

app.post('/api', (req,res) => {

    // let newAddress = req.query.address
    // addresses = [...addresses, newAddress]
    // console.log(req)

    // const address = "0x032C91a863a69f14061747300ee4F25328E188C7"
    const eth_key = "D5CF56J8QXTF53CI1XAGQ3R9T8RPSUKK8K"
    console.log(req.body.wallets)
    // apiCall(newAddress, eth_key)

})

/* 

1) front end makes '/api' get request
2) store in wallets in localstorage
3) make etherscan api call
4) make coingecko api call
5) display values in DOM

*/