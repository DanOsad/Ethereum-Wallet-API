document.querySelector('#submit').addEventListener('click', apiRequest)
document.querySelector('#csv').addEventListener('click', tableToCSV)

let tableData = []

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

async function apiRequest(){
    const addresses = document.getElementById('wallets').value//.split(',').map(wallet => wallet.trim())
    try{
        const response = await fetch(`https://eth-parallel-api.herokuapp.com/api/${addresses}`)
        // const response = await fetch(`http://localhost:8000/api/${addresses}`) //LOCAL TEST
        const data = await response.json()
        const rows = await convertObjToRows(data)
        insertTableData(rows)
        tableData = rows
    }catch(error){
        console.log(error)
    }
}



function convertObjToRows(obj) {
    let rows = []
    for (wallet in obj) {
        if (obj[wallet].usdc == null) {
            obj[wallet].usdc = 0
        }
        let row = [
            wallet, 
            `${obj[wallet].balance.toFixed(4)} ETH`, 
            `$${obj[wallet].value.toFixed(2)}`, 
            `${obj[wallet].usdc.toFixed(4)}`] // add address, balance, value to array of rows
        rows.push(row)
    }
    return rows
}

function insertTableData(arr) {
    let table = document.getElementById('results')
    arr.forEach(row => {
        let tr = table.insertRow()
        row.forEach(column => {
            let td = tr.insertCell()
            td.innerText = column
        })
    })
}

function exportToCSV() {
    const rows = tableData
    let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n")
    let encodedUri = encodeURI(csvContent)
    console.log(encodedUri)
    window.open(encodedUri)
}

function tableToCSV() {
    let csv_data = []
    let rows = document.getElementsByTagName('tr')
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].querySelectorAll('td,th')
        let csvrow = []
        for (let j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML)
        }
        csv_data.push(csvrow.join(","))
    }
    csv_data = csv_data.join('\n')
    downloadCSVFile(csv_data)
}

function downloadCSVFile(csv_data) {
    CSVFile = new Blob([csv_data], {
        type: "text/csv"
    })
    let temp_link = document.createElement('a')
    temp_link.download = "walletBalances.csv"
    let url = window.URL.createObjectURL(CSVFile)
    temp_link.href = url
    temp_link.style.display = "none"
    document.body.appendChild(temp_link)
    temp_link.click()
    document.body.removeChild(temp_link)
}