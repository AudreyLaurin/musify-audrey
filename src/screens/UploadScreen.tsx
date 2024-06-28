import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import {SongForm} from "../components/SongForm";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";
import {AudioPlayer} from "../components/AudioPlayer";
import {getCurrentUser} from 'aws-amplify/auth';
import axios from "axios";

export const UploadScreen = () => {
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);
    const [username, setUsername] = useState('username')

    useEffect(() => {
        document.title = "Musify - Upload";

        getCurrentUser().then(({username}) => {
            setUsername(username);
        })
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_REST_URL}/files/${username}`).then(response => {
            // console.log(response.data);
            setAudioURL(response.data[0].Url);
        }).catch(error => {
            console.error('Error fetching files', error);
        })
    }, [username]);

    return (
        <>
            <SignOutAndLanguageSwitch/>
            <div>Upload Screen</div>
            <FileUpload username={username}/>
            <AudioPlayer audioURL={audioURL}/>
            <SongForm/>
        </>
    )
}
