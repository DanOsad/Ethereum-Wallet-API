import React, { useState, useEffect } from 'react'
import Row from './Row'

const Table = (props) => {

    const [walletBalances, setWalletBalances] = useState([])

    useEffect(() => {
        async function getWalletBalances() {
            const response = await fetch(`http://localhost:8000/api/${props.wallets}`)
            const data = await response.json()
            setWalletBalances(data)
        }
        getWalletBalances()
      }, [props.wallets])

    const testData = [
        {
            "address":"0x032C91a863a69f14061747300ee4F25328E188C7",
            "ethBalance":2614.896160320109,
            "usd":4971806.665463036,
            "usdcBalance":null
        },
        {
            "address":"0x74Db0bbFde94AA80A135C5F8b60C0ca3d17332F2",
            "ethBalance":6.036821476777098,
            "usd":11478.050146655367,
            "usdcBalance":null
        },
        {
            "address":"0xD0829f8DdA953E85DA70b0a62A2F4e9a774EBf16",
            "ethBalance":0.16043000766874704,
            "usd":305.0319907808955,
            "usdcBalance":null
        }
    ]

    const makeRows = walletBalances.map(row => {
    // const makeRows = testData.map(row => {
        return (
            <Row
                key={row.address}
                address={row.address}
                ethBalance={row.ethBalance}
                usdcBalance={row.usdcBalance} 
                usd={row.usd}
            />
        )
    })

    return (
        <div className='table'>
            {makeRows}
            <div className='export-container'>
                <button className='csv-btn'>Export CSV</button>
            </div>
        </div>
    )

}

export default Table