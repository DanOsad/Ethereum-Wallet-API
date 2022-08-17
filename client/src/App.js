import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import InputArea from './components/InputArea'
import SmallScreen from './components/SmallScreen'

const App = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
      const handleWindowResize = () => {
      setWindowSize(getWindowSize())
      }

      window.addEventListener('resize', handleWindowResize)

      return () => {
      window.removeEventListener('resize', handleWindowResize)
      }
  }, [])

  function getWindowSize() {
      const {innerWidth} = window
      return innerWidth
  }

  return (
    <div className='container'>
      {
        windowSize > 1285 ?
        <>
          <Header />
          <InputArea />
        </> :
        <SmallScreen screenWidth={windowSize}/>
      }
    </div>
  )
}

export default App
