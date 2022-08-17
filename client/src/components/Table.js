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

    const makeRows = walletBalances.map(row => {
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