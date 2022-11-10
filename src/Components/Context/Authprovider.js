import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase.config';
export const Authcontext = createContext();
const auth = getAuth(app)
const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setloading(false)
        } )
        return()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {createUser, signIn,user,loading}
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;