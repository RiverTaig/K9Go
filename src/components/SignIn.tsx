import React, { useState, useRef, useContext } from "react";
import UserProvider, { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom'

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  User,
  UserCredential,
} from 'firebase/auth';
import 'firebase/firestore';
import { auth } from '../firebase';
import styles from './Signin.module.css';

const Signin = () => {
  const { user, setUser } = useContext(UserContext)
  const [ message, setMessage] = useState("")
  const [firebaseUser, setFirebaseUser] = useState<UserCredential>();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const setFields = (() => {
    if (emailRef.current && psdRef.current) {
      emailRef.current.value = "River.Taig@gmail.com"
      psdRef.current.value = "qwerqwer"
    }
  });
  const resendVerificationEmail = () => {
    if(emailRef.current){
      if(firebaseUser){
        sendEmailVerification(firebaseUser?.user)
        alert("Verification Email Re-sent")
      }
      else{
        alert("Unfortunately, there was a problem.  Please contact K9Go at (970)545-0023 or send an email to River@K9Go.app.")
      }
      
    }
    
  }
  const psdRef = useRef<HTMLInputElement | null>(null);
  const signInUser = (email: string, password: string) => {
    setMessage("")
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if(res.user){
          setFirebaseUser(res);
        }
        if(res.user.emailVerified){
          if (setUser) {
            setUser({ email, name: res.user.displayName })
            navigate("/")
          }
        }
        else{
          setMessage("Hmmm...It looks like you haven't verified your email yet.")
        }

      })
      .catch((err) => {
        let errString = "Oops - something unexpected happened."
        if (err.code.indexOf('user-not-found') > -1) {
          errString = "Sorrry - User not Found";
        }
        else if (err.code.indexOf('wrong-password') > -1) {
          errString = "Sorrry - Wrong Password";
        }
        setMessage(errString);
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
    if (email)
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Please check your email for a link to reset your password. Once you have followed that link and entered a new password, return here to login.")
        emailRef!.current!.value = "";
      }).catch( (err)=>{
        setMessage(err.message)
      });
  };

  return (
    <div className="form">
      <h2 onClick={setFields}> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <p className={styles.error}>{message}</p>
        {message.indexOf('verified') > 0 ? <p className="clickable-text " onClick={resendVerificationEmail}>Resend Verification Email</p> : ``}
        
        <button className="btn btn-primary" type="submit">Sign In</button><br></br>

        <p className="clickable-text" onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
      
    </div>
  );
};

export default Signin;