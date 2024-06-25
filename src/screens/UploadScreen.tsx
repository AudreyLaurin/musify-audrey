import {useEffect} from "react";
import MusicFileUpload from "../components/MusicFileUpload";
import {SongForm} from "../components/SongForm";
import {Header} from "../components/Header";
import {AudioPlayer} from "../components/AudioPlayer";

export const UploadScreen = () => {
    useEffect(() => {
        document.title = "Musify - Upload";
    }, []);

    return (
        <>
            <Header/>
            <div>Upload Screen</div>
            <MusicFileUpload username={'audrey'}/>
            <AudioPlayer/>
            <SongForm/>
        </>
    )
}
