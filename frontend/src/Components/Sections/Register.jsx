import { useSpring, animated } from "react-spring";
import React from "react";
import InputBox from "../Elements/InputBox";
import MainButton from "../Elements/MainButton";
import "./Styles/LoginRegisterStyles.css";

const Register = ({ formToggleFunc }) => {
  // spring Transition
  const springTrans = useSpring({
    from: {
      x: 2000,
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
          <h1 className="heading">Register</h1>
          <InputBox type="text" inputPlaceholder="Enter Your Name ..." />
          <InputBox type="text" inputPlaceholder="Enter Your Email..." />
          <InputBox type="text" inputPlaceholder="Enter Your Username ..." />
          <InputBox
            type="password"
            inputPlaceholder="Enter Your Password ..."
          />
          <InputBox
            type="password"
            inputPlaceholder="Enter Your Confirm Password ..."
          />

          <MainButton buttonText="Register" />
          <a
            href="#"
            className="to-reg"
            onClick={(e) => {
              e.preventDefault();
              formToggleFunc(true);
            }}
          >
            Have an New Account
          </a>
        </div>
      </animated.div>
    </>
  );
};

export default Register;
