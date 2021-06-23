import React from 'react';
import styles from './index.module.css'
import { WechatOutlined, GoogleSquareFilled, FacebookFilled } from '@ant-design/icons';
import 'firebase/app'
import { auth } from '../../firebase'
import firebase from 'firebase/app';
import Logo from '../Chats/chatnow.png'


const Login = () => {

    // HANDLE CLICK GOOGLE 
    const HandleClickGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // HANDLE CLICK FACEBOOK
    const HandleClickFacebook = () => auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())

    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <img src={Logo} alt="logo" height={'140px'} width={'200px'} />
                <h1>Welcome To <span className={styles.chatie}>Chat<span className={styles.ie}>Now</span></span></h1>
                <h2>Chat With Your Friends & Family Members</h2>

                <div className={styles.buttonContainer}>
                    {/* GOOGLE BUTTON */}
                    <div>
                        <button className={styles.googleButton} onClick={HandleClickGoogle}>
                            <GoogleSquareFilled className={styles.socialIcons} />
                            Login With Google
                        </button>
                    </div>

                    {/* FACEBOOK BUTTON */}
                    <div>
                        <button className={styles.facebookButton} onClick={HandleClickFacebook}>
                            <FacebookFilled className={styles.socialIcons} />
                            Login With Facebook
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default React.memo(Login);