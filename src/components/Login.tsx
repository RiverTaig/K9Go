// About.tsx

import React, { useContext, useState, useEffect } from "react";
import Signin from "./SignIn";
import Signup from "./Signup";
import UserProvider, { UserContext } from "../context/UserContext";
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [index, setIndex] = useState(false);
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (setUser) {
      // Simulate an API call to get the last logged in user from local storage
      setUser({
        name: '',
        email: ''
      })
    }
  }, [])


  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  const logOut = () => {
    if (setUser) {
      setUser({
        name: '',
        email: ''
      })
    }
  }


  const newUser = <><span>New User? </span><span className='clickable-text'> Tap here </span></>;
  const alreadyHave = <><span>Already have an account? </span><span className='clickable-text'> Tap here! </span></>;
  return (
    <>
      <div>
        {user!.name !== '' ?
          <div>
            <p className="left-text">Currently logged in as:  {user!.name} ({user!.email}) </p>
            <span className="clickable-text" onClick={logOut}>Log Out</span>
            <hr></hr>
          </div> : <div> </div>}
      </div>
      <div className="container">
        {!index ? <Signin></Signin> : <Signup onEvent={toggleIndex}></Signup>}
        <p onClick={toggleIndex}>
          {!index ? newUser : alreadyHave}
        </p>
      </div>
    </>

  );
}

export default Login;