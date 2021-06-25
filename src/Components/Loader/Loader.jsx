import React from 'react';
import Logo from '../Chats/chatnow.png'
import styles from './index.module.css'

export default function Loader() {

    return (
        <div className={styles.center}>
            <img src={Logo} alt="Loading..." height={'200px'} width={'200px'} />
        </div>
    );
}
