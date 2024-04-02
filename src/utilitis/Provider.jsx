import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

export const authCustomContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut (auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        } )
        return () => unsubscribe()
    },[])

    const authInfo = {user, createUser, logInUser, logOut}
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