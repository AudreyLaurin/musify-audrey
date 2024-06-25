import {useEffect} from "react";

export const SharedSongsScreen = () => {
    useEffect(() => {
        document.title = "Musify - Shared Songs";
    }, []);

    return (
        <div>Shared Songs Screen</div>
    )
}