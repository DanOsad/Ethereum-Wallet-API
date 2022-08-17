import React, {useState, useEffect} from "react"

const SmallScreen = (props) => {

    

    return (
        <div className='small-screen'>
            <span className='small-screen-title'>This application is best viewed on larger screens</span>
            <span className='small-screen-subtitle'>Current Window Width: <span className='small-screen-width'>{props.screenWidth}</span>px</span>
        </div>
    )
}

export default SmallScreen