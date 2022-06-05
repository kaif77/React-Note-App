import { useSpring, animated } from "react-spring";
import InputBox from '../Elements/InputBox'
import MainButton from '../Elements/MainButton'
import "./Styles/LoginRegisterStyles.css"

const Login = ({formToggleFunc}) => {
     // spring Transition
  const springTrans = useSpring({
    from: {
      x: -2000,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });
  return (
    <>
    <animated.div style={springTrans} className="login-register-section">
    <div className="login-register-form">
    <h1 className='heading'>Login</h1>
            <InputBox type="text" inputPlaceholder="Enter Your Username ..." />
            <InputBox type="text" inputPlaceholder="Enter Your Password ..." />
            <MainButton buttonText="Login" />
            <a href="#" className='to-reg' onClick={(e)=> {
                e.preventDefault()
                formToggleFunc(false)
            }} >Create a New Account</a>
        </div>
    </animated.div>
    </>
  )
}

export default Login