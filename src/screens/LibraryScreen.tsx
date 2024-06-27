import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";

export const LibraryScreen = () => {
    const {t} = useTranslation()

    useEffect(() => {
        document.title = "Musify - Library";
        const songs = axios.get(`https://s5uxb9nh6f.execute-api.us-east-1.amazonaws.com/dev/users`, {
            headers: {
                "Access-Control-Allow-Origin" : "*"
            }
        })
            .then(res => {
                console.log(songs)
            })
    }, []);

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