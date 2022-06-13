// require('dotenv').config()

// make api call

// display table of results on DOM

const wallets = [
    "0x032C91a863a69f14061747300ee4F25328E188C7",
    "0x74Db0bbFde94AA80A135C5F8b60C0ca3d17332F2",
    "0xD0829f8DdA953E85DA70b0a62A2F4e9a774EBf16",
    "0xd534695c3D5fE3f339227dAdc34E97A5B6E9269e",
    "0x1E63326a84d2FA207BdFa856dA9278a93DeBa418",
    "0xC580656B48ED00ac57cDe89Bb6749F2534e7a8ad",
    "0x87890C2DC17d576e4e86C54FDe7FAeF508d84319",
    "0x7fa9362612949464235A7d721Bac025eFa6E3203",
    "0xF693cf3841bcd82E0114EBe85562f02b3F61a7E4",
    "0x5b5106d0aA6Bb5bC96AA712f7496849163BBAB5F",
    "0x267C56c278D44d0FcBa6d74c757A0B1a56034DFc",
    "0x3640B26B962CA3544F57C871A8F69AA1EC6dB0cA",
    "0xd4D8C2EC916E0D8F955D42eA7F91248d52E91b7d",
    "0x02f086dBC384d69b3041BC738F0a8af5e49dA181",
    "0x745317Acf05FE655742b131bef8b76AB71633c9B",
    "0x46365c0fb29B066e05800F4D060827D37B3608cA",
    "0xBE77532D66858D8EAE39FFf5e8E97531842beAd5",
    "0x494D3201E4D29B57395847C25A332Bd64d4BB78A",
]

const address = "0x032C91a863a69f14061747300ee4F25328E188C7"
const eth_key = "D5CF56J8QXTF53CI1XAGQ3R9T8RPSUKK8K"
// const eth_key = process.env.KEY

async function apiCall(addresses, key){
    let address = ''
    wallets.forEach(wallet=>address += `${wallet},`)
    const link = `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${key},` 
    try{
        const response = await fetch(link)
        const data = await response.json()
        for (let i=0; i<wallets.length; i++) {
            console.log(`Address: ${data.result[i]['account']}, Balance: ${data.result[i]['balance']}`)
        }
    }catch(error){
        console.log(error)
    }
}

// document.getElementById('submit').addEventListener('click', retrieve)

// function retrieve() {
//     const wallets = document.getElementById('wallets').value.split(',').map(wallet => wallet.trim())
//     fetch()
// }

// apiCall(wallets, eth_key)

document.querySelector('button').addEventListener('click', () => {
    const wallets = document.getElementById('wallets').value.split(',').map(wallet => wallet.trim())
    const payload = JSON.stringify({
        "wallets": wallets
    })
    fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    })
})