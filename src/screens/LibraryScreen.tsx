import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import '../App.css'
import axios from "axios";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";
import {Musify} from "../components/Musify";

export const LibraryScreen = () => {
    const {t} = useTranslation()
    const {user} = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        document.title = "Musify - Library";

        axios.get(`${process.env.REACT_APP_REST_URL}/users?userId=${user.userId}`)
            .then(res => {
                if (res.data.items === null) {
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

    // TODO : Give the songs of the user to the SongsGrid
    // TODO : When clicking on a song, redirect to the music-player screen to listen to that song (use a params)
    // TODO : When clicking on Shared songs, rerender and give the user's sharedSongs to the SongsGrid and redraw the grid

    return (
        <div className={"container"}>
            <div className={"header"}>
                <Musify/>
                <div className={"options"}>
                    <div className={"options"}>
                        <button onClick={() => console.log()}>{t('sharedSongsButton')}</button>
                        <button onClick={() => window.location.href = '/upload'}>{t('uploadButton')}</button>
                    </div>
                    <SignOutAndLanguageSwitch/>
                </div>
            </div>
            <div>
                {/*SongsGrid here*/}
            </div>
        </div>
    )
}