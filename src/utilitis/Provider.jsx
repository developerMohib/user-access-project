import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

export const authCustomContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        signOut (auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        } )
        setLoading(false)
        return () => unsubscribe()
    },[])

    const authInfo = {user, createUser, logInUser, logOut, loading}
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