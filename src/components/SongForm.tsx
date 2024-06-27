import {useTranslation} from "react-i18next";

interface SongData {
    albumPicture?: String;
    albumTitle: String;
    releaseYear: Number;
    artist: String;
    title: String;
    language: String;
}

export const SongForm = () => {
    const {t} = useTranslation()

    // https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/

    return (
        <div>
            {/* Ajouter le input pour le song file (MusicFileUpload) */}
            <label htmlFor={"albumPicture"}>{t('albumPicture')}</label>
            <input type={"file"} id={"albumPicture"} accept={"image/png, image/jpeg, image/jpg, image/webp"}/>

            <label htmlFor={"albumTitle"}>{t('albumTitle')}</label>
            <input type={"text"} id={"albumTitle"}/>

            <label htmlFor={"releaseYear"}>{t('releaseYear')}</label>
            <input type={"number"} id={"releaseYear"}/>

            <label htmlFor={"artist"}>{t('artist')}</label>
            <input type={"text"} id={"artist"}/>

            <label htmlFor={"title"}>{t('title')}</label>
            <input type={"text"} id={"title"}/>

            <label htmlFor={"language"}>{t('language')}</label>
            <input type={"text"} id={"language"} maxLength={2}/>
        </div>
    )
}
