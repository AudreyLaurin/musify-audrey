import {useEffect} from "react";

export const LibraryScreen = () => {
    useEffect(() => {
        document.title = "Musify - Library";
    }, []);

    return (
        <div>Library Screen</div>
    )
}