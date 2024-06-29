import {useTranslation} from "react-i18next";
import styled from "styled-components";
import FileUpload from "./FileUpload";

// TODO: Use these Props to preload data in the form when choosing to modify an existing song
interface SongDataProps {
    albumPicture?: string;
    albumTitle?: string;
    releaseYear?: number;
    artist?: string;
    title?: string;
    language?: string;
}

export const SongForm = () => {
    const {t} = useTranslation()

    // TODO : Make changes in FileUpload and add album covers with S3
    // TODO: https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/

    return (
        <SongFormDiv>
            {/*<div>
                <label htmlFor={"albumPicture"}>{t('albumPicture')}</label>
                <input type={"file"} id={"albumPicture"} accept={"image/png, image/jpeg, image/jpg, image/webp"}/>
            </div>*/}

            <div>
                <label htmlFor={"albumTitle"}>{t('albumTitle')}</label>
                <input type={"text"} id={"albumTitle"}/>
            </div>

            <div>
                <label htmlFor={"releaseYear"}>{t('releaseYear')}</label>
                <input type={"number"} id={"releaseYear"}/>
            </div>

            <div>
                <label htmlFor={"artist"}>{t('artist')}</label>
                <input type={"text"} id={"artist"}/>
            </div>

            <div>
                <label htmlFor={"songTitle"}>{t('songTitle')}</label>
                <input type={"text"} id={"songTitle"}/>
            </div>

            <div>
                <label htmlFor={"language"}>{t('language')}</label>
                <input type={"text"} id={"language"} maxLength={2}/>
            </div>
        </SongFormDiv>
    )
}

const SongFormDiv = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    margin-top: 35px;
`