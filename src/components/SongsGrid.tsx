import {useTranslation} from "react-i18next";

interface SongRow {
    albumPicture?: String;
    albumTitle: String;
    releaseYear: Number;
    artist: String;
    title: String;
    language: String;
    username?: String;
}

// TODO: Make the Grid that will be built when provided an array of songs
export const SongsGrid = () => {
    const {t} = useTranslation()

    return (
        <div>Songs</div>
    )
}