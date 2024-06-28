import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useAuthenticator} from "@aws-amplify/ui-react";

export const LibraryScreen = () => {
    const {t} = useTranslation()
    const { user} = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        document.title = "Musify - Library";

         axios.get(`${process.env.REACT_APP_REST_URL}/users?userId=${user.userId}`)
            .then(res => {
                if(res.data.items === null) {
                    console.log('User not found', res.data);
                    axios.post(`${process.env.REACT_APP_REST_URL}/users`, {
                        userId: `${user.userId}`,
                        username: `${user.username}`
                    }).then(res => {
                        console.log(res.data)
                    })
                } else {
                    console.log('User found', res.data)
                }
                console.log(res.data)
            })
    });

    return (
        <>
            <div className={"header"}>
                <div>Library Screen</div>
                {/* Mettre le morceau MUSIFY quand le component sera fait */}
                <div>
                    <button onClick={() => window.location.href = '/upload'}>{t('uploadButton')}</button>
                </div>
            </div>
            <div>
                SongsGrid ici
            </div>
        </>
    )
}