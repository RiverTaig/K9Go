import { createContext, useState,Dispatch, SetStateAction, ReactNode } from "react";

export type User = {
    name: string, 
    email: string
}


export interface UserConextInterface {
    user: User, 
    setUser: Dispatch<SetStateAction<User>>
}


const defaultState = {
    user: {
        name: '', 
        email: ''
    },
    setUser: (user:User) => {}
} as UserConextInterface

export const UserContext = createContext<Partial<UserConextInterface>>(defaultState)

type UserProviderProps = {
    children: ReactNode
}

export default function UserProvider({children}: UserProviderProps)
{
    const [user, setUser] = useState<User>({
        name: '',
        email: ''
    });

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}




















// import {
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signOut,
//     updateProfile,
//     sendPasswordResetEmail,
// } from "firebase/auth";
// import { auth } from "../firebase";
// import { NextOrObserver } from "@firebase/auth";


// interface UserContextType {
//     userName: string;
//     email: string,
// }
// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider: React.FC = ({ children }) => {
//     const [userName, setUserName] = useState('John Doe');
//     const [email, setEmail] = useState('JohnDoe@gmail.com');


//     return (
//         <UserContext.Provider value={{ email, userName }}>
//             {children}
//         </UserContext.Provider>
//     );    
// }

// export const useUserContext = () => {
//     return useContext(UserContext);
// };



// interface UserContextType {
//     user: any; // better to use a specific type here instead of `any`
//     loading: boolean;
//     error: string;
//     signInUser: (email: string, password: string) => void;
//     registerUser: (email: string, password: string, name: string) => void;
//     logoutUser: () => void;
//     forgotPassword: (email: string) => Promise<void>;
// }

// const forgotPassword = (email: string) => {
//     return sendPasswordResetEmail(auth, email);
// };


// export const useUserContext = () => {
//     return useContext(UserContext);
// };

// type UserContextProviderProps = {
//     children: React.ReactNode;
// };

// interface User {
//     id: string;
//     name: string;
//     // include other properties of your user object here
// }

// // let [user, setUser] = null// useState<any >(null);
// // let  [loading, setLoading] //= useState(false);
// // let [error, setError] //= useState("");


// export const UserContextProvider = ({ children }: UserContextProviderProps) => {
//     const [user, setUser] = useState<any>(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     useEffect(() => {
//         setLoading(true);
//         const unsubscribe = onAuthStateChanged(auth, res => {
//             if (res) {
//                 setUser(res);
//             } else {
//                 setUser(null);
//             }
//             setError("");
//             setLoading(false);
//         });
//         return unsubscribe;
//     }, []);

//     //Note the display name is name|membershipValidated
//     const registerUser = (email: string, password: string, name: string) => {
//         setLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(() => {
//                 if (auth.currentUser) {
//                     updateProfile(auth.currentUser, {
//                         displayName: name + "|" + "true"
//                     })
//                 }
//             })
//             .then((res) => {
//                 console.log(res)
//             })
//             .catch((err) => {
//                 setError(err.message);

//             })
//             .finally(() => setLoading(false));
//     };



//     const logoutUser = () => {
//         signOut(auth);
//     };


//     const contextValue = {
//         user,
//         loading,
//         error,
//         signInUser,
//         registerUser,
//         logoutUser,
//         forgotPassword,
//     };
//     return (
//         <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
//     );
// };

// const signInUser = (email: string, password: string) => {
//     //setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//         .then((res) => console.log(res))
//         .catch((err) => {
//             let errString = "Oops - something unexpected happened."
//             if (err.code.indexOf('user-not-found') > -1) {
//                 errString = "Sorrry - User not Found";
//             }
//             else if (err.code.indexOf('wrong-password') > -1) {
//                 errString = "Sorrry - Wrong Password";
//             }
//             //setError(errString);
//         })
//         //.finally(() => setLoading(false));
// };


// export const UserContext = createContext({ signInUser, forgotPassword,  });
