import React, { useState } from 'react'
import Table from './Table'

const InputArea = () => {

    const [wallets, setWallets] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(true)

    const handleChange = (event) => {
        const { value } = event.target
        setWallets(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(prevState => !prevState)
        // submitToApi(formData)
        console.log(wallets)
    }

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
            {isSubmitted && <Table />}
        </main>
    )
}

export default InputArea