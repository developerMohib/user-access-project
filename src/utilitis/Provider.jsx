import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {GoogleAuthProvider, createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

export const authCustomContext = createContext(null);
const googlePovider = new GoogleAuthProvider();

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut (auth)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googlePovider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        } )
        setLoading(false)
        return () => unsubscribe()
    },[])

    const authInfo = {user, createUser, logInUser, logOut, loading, signInWithGoogle}
    return (
        <authCustomContext.Provider value={authInfo}>
            {children}
        </authCustomContext.Provider >
    );
};
Provider.propTypes ={ 
    children: PropTypes.node
}
export default Provider;