import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";

export const LibraryScreen = () => {
    const {t} = useTranslation()

    useEffect(() => {
        document.title = "Musify - Library";
         axios.get(`${process.env.REACT_APP_REST_URL}/users`)
            .then(res => {
                console.log(res.data)
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