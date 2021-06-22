import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase'

// CREATING CONTEXT
export const AuthContext = createContext()

// CREATING PROVIDER
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
            setUser(user)
            setLoading(false)
        })
    }, [user])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}