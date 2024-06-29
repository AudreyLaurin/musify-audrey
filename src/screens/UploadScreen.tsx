import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import {SongForm} from "../components/SongForm";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {Musify} from "../components/Musify";
import {useTranslation} from "react-i18next";
import '../App.css'
import styled from "styled-components";
import axios from "axios";

// TODO : Add album picture useState once the input is added
export const UploadScreen = () => {
    const {t} = useTranslation()
    const {user} = useAuthenticator((context) => [context.user]);

    const [userAlbumsId, setUserAlbumsId] = useState<string | null>(null)
    const [artist, setArtist] = useState<string | null>(null)
    const [albumTitle, setAlbumTitle] = useState<string | null>(null)
    const [year, setYear] = useState<number | null>(null)

    const [albumSongsId, setAlbumSongsId] = useState<string | null>(null)
    const [key, setKey] = useState<string | null>('putRealKeyHere')
    const [songTitle, setSongTitle] = useState<string | null>(null)
    const [language, setLanguage] = useState<string | null>(null)

    useEffect(() => {
        document.title = "Musify - Upload";

        axios.get(`${process.env.REACT_APP_REST_URL}/users?userId=${user.userId}`)
            .then(res => {
                if(res.data.items === null) {
                    console.log('User not found', res.data);
                    axios.post(`${process.env.REACT_APP_REST_URL}/users`, {
                        userId: `${user.userId}`,
                        username: `${user.username}`
                    }).then(res => {
                        console.log(res.data)
                        setUserAlbumsId(res.data.id)
                    })
                } else {
                    console.log('User found', res.data)
                    setUserAlbumsId(res.data.id)
                }
            })
    }, []);

    const createSong = () => {
        // TODO : createSong method
       // Set all variables using the values in the inputs
       // After all input values are retrieved, axios.post with /albums to create an album
       // Set the album id with the newly created album id
       // Create a song using axios.post with /songs

        // Return on the library screen and enjoy the newly added song
        window.location.href = '/'
    }

    return (
        <div className={"container"}>
            <div className={"header"}>
                <Musify/>
                <div>
                    <SignOutAndLanguageSwitch/>
                </div>
            </div>
                <FormDiv>
                    <FileUpload username={user.username}/>
                    <SongForm/>
                </FormDiv>
            <div className={"options"} style={{margin: "35px auto 0", }}>
                <button onClick={createSong}>{t('addButton')}</button>
                <button onClick={() => window.location.href = '/'}>{t('cancelButton')}</button>
            </div>
        </div>
    )
}

const FormDiv = styled.div`
    text-align: center;
    margin-top: 15vh;
`
