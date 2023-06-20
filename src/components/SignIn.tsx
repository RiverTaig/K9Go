import React, { useRef, useContext } from "react";
import UserProvider, { UserContext } from "../context/UserContext";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import 'firebase/firestore';
import { auth } from '../firebase';
import styles from './Signin.module.css';

const Signin = () => {
  const { user, setUser } = useContext(UserContext)

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const psdRef = useRef<HTMLInputElement | null>(null);
  const signInUser = (email: string, password: string) => {
    //setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if(setUser){
          setUser({email,name:'.....'})
        }

        console.log(res)
      })
      .catch((err) => {
        let errString = "Oops - something unexpected happened."
        if (err.code.indexOf('user-not-found') > -1) {
          errString = "Sorrry - User not Found";
        }
        else if (err.code.indexOf('wrong-password') > -1) {
          errString = "Sorrry - Wrong Password";
        }
        //setError(errString);
      })
    //.finally(() => setLoading(false));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!(emailRef && emailRef.current)) {
      return;
    }
    const email = emailRef.current!.value;
    const password = psdRef!.current!.value;
    if (email && password) {
      signInUser(email, password);
    }
  };

  const forgotPasswordHandler = () => {
    const email = emailRef!.current!.value;
    //if (email)
    // forgotPassword(email).then(() => {
    //   emailRef!.current!.value = "";
    // });
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button className="btn btn-primary" type="submit">Sign In</button><br></br>
        <p className="clickable-text" onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default Signin;