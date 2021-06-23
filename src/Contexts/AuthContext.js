import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase'
import { useHistory } from 'react-router';

// CREATING CONTEXT
export const AuthContext = createContext()

// CREATING PROVIDER
export const AuthProvider = ({ children }) => {
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        let mounted = true
        auth.onAuthStateChanged((user) => {
            console.log(user)
            if (mounted) {
                setUser(user)
                setLoading(false)
                if (user) {
                    history.push('/chats')
                }
            }
            return () => { mounted = false };
        })
    }, [user, history])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}