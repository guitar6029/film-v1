import { useState, useContext, createContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, 
    onAuthStateChanged
} from 'firebase/auth'

import { auth } from '../firebase';

const UserContext = createContext();


export const AuthContext = ({ children }) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <UserContext.Provider value={{ createUser, signInUser, logoutUser, user }} >
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}