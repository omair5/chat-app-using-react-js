import React, { useContext } from 'react';
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../../firebase'
import styles from './index.module.css'
import Logo from './chatnow.png'
import { useHistory } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext'

const Chats = () => {
    const { user } = useContext(AuthContext)
    console.log('from chat',user)
    const history = useHistory()
    const HandleLogout = async () => {
        await auth.signOut()
        history.push('/')
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={Logo} alt='logo' height={'120px'} width={'120px'} className={styles.logoImage} />
                </div>
                <div className={styles.logout}>
                    <button className={styles.logoutButton} onClick={HandleLogout}>Logout</button>
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 75px)"
                projectID={'4a26c0e8-e545-45e0-a899-0d9eb60789b7'}
                userName="."
                userSecret="."
            />
        </>
    );
}
export default React.memo(Chats);