import {useEffect, useState} from "react";
import {AudioPlayer} from "../components/AudioPlayer";
import {useTranslation} from "react-i18next";
import '../App.css'
import axios from "axios";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {Musify} from "../components/Musify";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";

export const PlayerScreen = () => {
    const {t} = useTranslation()
    const {user} = useAuthenticator((context) => [context.user]);
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);

    useEffect(() => {
        document.title = "Musify - Music player";
    }, []);

    // TODO : Retrieve the data from the song given as params in the library screen using axios.get
    // TODO : Once the data is retrieved, place it in the <p>
    // TODO : Make the audio player work to play a file
    // TODO : Add the DELETE, MODIFY and SHARE functionalities using onClick methods on the buttons(to be created too)
    // TODO : Add a div for the picture of the album cover (waiting for other image related TODOs)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_REST_URL}/files/${user.username}`).then(response => {
            // console.log(response.data);
            setAudioURL(response.data[0].Url);
        }).catch(error => {
            console.error('Error fetching files', error);
        })
    }, []);

    return (
        <div className={"container"}>
            <div className={"header"}>
                <Musify/>
                <div className={"options"}>
                    <div className={"options"}>
                        <button onClick={() => window.location.href = '/'}>{t('profileButton')}</button>
                        <button onClick={() => window.location.href = '/upload'}>{t('uploadButton')}</button>
                    </div>
                    <SignOutAndLanguageSwitch/>
                </div>
            </div>
            <div>
                <p>{t('albumTitle')} : </p>
                <p>{t('releaseYear')} : </p>
                <p>{t('artist')} : </p>
                <p>{t('songTitle')} : </p>
                <p>{t('language')} : </p>
            </div>
            <div>
                <AudioPlayer audioURL={audioURL}/>
            </div>
        </div>
    )
}
