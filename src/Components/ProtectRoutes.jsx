import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';

const ProtectRoutes = ({ Component }) => {
    const history = useHistory()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [user, history])

    return (
        <>
            <Component />
        </>
    );
}
export default ProtectRoutes;