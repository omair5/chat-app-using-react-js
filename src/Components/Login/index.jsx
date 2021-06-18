import React from 'react';
import styles from './index.module.css'
import { WechatOutlined, GoogleSquareFilled, FacebookFilled } from '@ant-design/icons';
import { classes } from 'istanbul-lib-coverage';

const Login = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <span ><WechatOutlined className={styles.mainIcon} /></span>
                <h1>WELCOME TO <span className={styles.chatie}>CHAT<span  className={styles.ie}>ie</span></span></h1>
                <h2>Chat With Your Friends & Family Members</h2>

                <div className={styles.buttonContainer}>
                    <div>
                        <button className={styles.googleButton}>
                            <GoogleSquareFilled className={styles.socialIcons} />
                            Login With Google
                        </button>
                    </div>

                    <div>
                        <button className={styles.facebookButton}>
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