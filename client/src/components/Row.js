import React, { useState } from 'react'
import walletIcon from '../images/wallet.svg'
import ethIcon from '../images/eth.svg'
import usdcIcon from '../images/usdc.svg'
import usdIcon from '../images/usd.svg'

const Row = (props) => {
    // props: address, ethBalance, usd, usdcBalance

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prevState => !prevState)
    }

    const styles = {
        backgroundColor: isClicked ? "#eba85b" : ""
    }

    return (
        <div className='table-row'>
            <span className='cell address' onClick={handleClick} style={styles}>
                <img src={walletIcon} alt='walletIcon' className='icon wallet-icon' />
                {props.address}
            </span>
            <span className='cell eth' onClick={handleClick} style={styles}>
                <img src={ethIcon} alt='ethIcon' className='icon eth-icon' />
                {props.ethBalance}
            </span>
            <span className='cell usd' onClick={handleClick} style={styles}>
                <img src={usdIcon} alt='usdIcon' className='icon usd-icon' />
                {`$${props.usd}`}
            </span>
            <span className='cell usdc' onClick={handleClick} style={styles}>
                <img src={usdcIcon} alt='usdcIcon' className='icon usdc-icon' />
                {props.usdcBalance}
            </span>
        </div>
    )
}

export default Row