import {useEffect} from "react";
import {AudioPlayer} from "../components/AudioPlayer";

export const PlayerScreen = () => {
    useEffect(() => {
        document.title = "Musify - Player";
    }, []);

    return (
        <>
            <div>Player Screen</div>
            <AudioPlayer/>
        </>
    )
}