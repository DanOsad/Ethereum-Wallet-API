import React, { useState } from 'react'
import Table from './Table'

const InputArea = () => {

    const [wallets, setWallets] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    // const [walletBalances, setWalletBalances] = useState([])

    // let walletBalances = []

    const handleChange = (event) => {
        const { value } = event.target
        setWallets(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(prevState => !prevState)
        // walletBalances = getWalletBalances()
    }

    // async function getWalletBalances(){
    //     // const addresses = document.getElementsByClassName('text-area').value
    //     try{
    //         const response = await fetch(`http://localhost:8000/api/${wallets}`)
    //         // const response = await fetch(`https://eth-parallel-api.herokuapp.com/api/${addresses}`)
    //         const data = await response.json()
    //         return data
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    return (
        <main>
            <form className='form' onSubmit={handleSubmit}>
                    <textarea
                        className='text-area'
                        value={wallets}
                        placeholder="Submit up-to 18 wallets at a time"
                        onChange={handleChange}
                        name="wallets"
                    />
                <button className='submit-btn'>Submit</button>
            </form>
            {isSubmitted && <Table wallets={wallets}/>}
        </main>
    )
}

export default InputArea