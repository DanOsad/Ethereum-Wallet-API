import React from 'react'
import Row from './Row'

const Table = () => {

    const tableData = [
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
        {
            address: '0x494D3201E4D29B57395847C25A332Bd64d4BB78A', 
            ethBalance: '1.023443',
            usdcBalance: '2554.0034',
            usd: '10389'
        },
    ]

    const makeRows = tableData.map(row => {
        return (
            <Row
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