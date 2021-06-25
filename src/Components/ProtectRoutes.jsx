import React, { useContext } from 'react';
// import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const ProtectRoutes = ({ Component }) => {
    // const history = useHistory()
    const { user } = useContext(AuthContext)

    // useEffect(() => {
    //     if (!user) {
    //         history.push('/')
    //     }
    // }, [user, history])

    return (
        <>
            {
                user ? <Component /> : <Redirect to={'/'} />
            }

        </>
    );
}
export default ProtectRoutes;