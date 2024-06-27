import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import {SongForm} from "../components/SongForm";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";
import {AudioPlayer} from "../components/AudioPlayer";
import axios from "axios";

export const UploadScreen = () => {
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);

    useEffect(() => {
        document.title = "Musify - Upload";
// Faire une variable d'environnement pour jusqu'à dev inclus
        axios.get(`https://s5uxb9nh6f.execute-api.us-east-1.amazonaws.com/dev/files/audrey`).then(response => {
            console.log(response.data);
            setAudioURL(response.data[0].Url);
        }).catch(error => {
            console.error('Error fetching files', error);
        })
    }, []);

    return (
        <>
            <SignOutAndLanguageSwitch/>
            <div>Upload Screen</div>
            <FileUpload username={'audrey'}/>
            <AudioPlayer audioURL={audioURL}/>
            <SongForm/>
        </>
    )
}
