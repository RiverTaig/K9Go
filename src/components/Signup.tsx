import React, { useRef, FormEvent, useState } from "react";
import UserProvider from "../context/UserContext";
import firebase from 'firebase/app';
import { collection, doc, setDoc } from "firebase/firestore";
import { auth } from '../firebase';
import styles from './Signup.module.css';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential
} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const psdRef = useRef<HTMLInputElement>(null);
  const psdConfirmRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const db = getFirestore();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    let cleaned = ('' + value).replace(/\D/g, '');

    // Check if the cleaned phone number has the correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return '(' + match[1] + ')' + match[2] + '-' + match[3]
    }

    return null
  }

  // Declare a new state variable for the error
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phone = formatPhoneNumber(phoneRef.current!.value);
    const phonePattern = /\(\d{3}\)\d{3}-\d{4}/;

    if ((phone === null) || (phonePattern.test(phone) !== true)) {
      setError("Invalid phone number.");
      return;
    }

    const email = emailRef.current!.value;
    const name = nameRef.current!.value;
    const password = psdRef.current!.value;
    const confirmPassword = psdConfirmRef.current!.value;
    if (confirmPassword !== password) {
      setError("Password and Confirm Password do not match.")
      return;
    }
    //const auth = firebase.auth();
    if (email && password && name) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((cred: UserCredential) => {
          // The user has been created successfully
          setError(null);  // Clear any previous error
          const user = cred.user;
          // Since the user can be potentially null (though unlikely), let's handle that case
          if (user) {
            // Now, store the additional information in Firestore
            setDoc(doc(collection(db, 'Users'), user.uid), {
              username: name,
              phoneNumber: phone
            });
          } else {
            console.error("User is unexpectedly null");
          }
          //const user = userCredential.user;
        }).catch((error) => {
          // Set the error message if there's an error
          setError(error.message);
        });
    }
  };

  return (
    <div className="form">
      <p>
        K9Go uses your email to occassionally reach out to you with product offers.  We use your cell phone
        to text you to confirm scheduled walks and to reschedule in the event of cancellation.
        We promise to never sell your personal information.

      </p>
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="name" ref={nameRef} required minLength={3} />
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Cell" type="phone" ref={phoneRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <input placeholder="Confirm" type="password" ref={psdConfirmRef} />
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Signup;