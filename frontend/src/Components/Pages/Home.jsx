import Login from '../Sections/Login'
import { useState } from 'react'
import Register from '../Sections/Register'

const Home = () => {
  // Form State
  const [toggleLgReg, setToggleLegReg] = useState(true)
  return (
    <>
    <div className='home'>       
        {
          toggleLgReg ? 
          <Login formToggleFunc={setToggleLegReg}/> : <Register formToggleFunc={setToggleLegReg}/>
        }
    </div>
    </>
  )
}

export default Home