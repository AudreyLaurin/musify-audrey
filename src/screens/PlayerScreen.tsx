import {useEffect, useState} from "react";
import {AudioPlayer} from "../components/AudioPlayer";
import axios from "axios";
import {useAuthenticator} from "@aws-amplify/ui-react";

export const PlayerScreen = () => {
    const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.signOut, context.authStatus]);
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);

    useEffect(() => {
        document.title = "Musify - Player";
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_REST_URL}/files/${user.username}`).then(response => {
            // console.log(response.data);
            setAudioURL(response.data[0].Url);
        }).catch(error => {
            console.error('Error fetching files', error);
        })
    }, []);

    return (
        <>
            <div>Player Screen</div>
            <AudioPlayer audioURL={undefined}/>
            <AudioPlayer audioURL={audioURL}/>
        </>
    )
}