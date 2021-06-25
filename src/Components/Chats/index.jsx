import React, { useState, useEffect, useContext } from "react"
import styles from './index.module.css'
import Logo from './chatnow.png'
import axios from 'axios'
import { ChatEngine } from 'react-chat-engine'
import { AuthContext } from "../../Contexts/AuthContext"
import { auth } from "../../firebase"
import Loader from "../Loader/Loader"


export default function Chats() {
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)

    const HandleLogout = async () => {
        await auth.signOut()
        window.location.href = "/"
    }

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }

    useEffect(() => {
        axios.get(
            'https://api.chatengine.io/users/me/',
            {
                headers: {
                    "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                    "user-name": user.email,
                    "user-secret": user.uid
                }
            }
        )
            .then(() => setLoading(false))
            // if user doesnt exists then create a user in catch 
            .catch(e => {
                let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret', user.uid)

                getFile(user.photoURL)
                    .then(avatar => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post(
                            'https://api.chatengine.io/users/',
                            formdata,
                            { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY } }
                        )
                            .then(() => setLoading(false))
                            .catch(e => console.log('e', e.response))
                    })
            })
    }, [user])

    if (loading) return <Loader />

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
                projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </>
    )
}