// require('dotenv').config()

// make api call

// display table of results on DOM

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
