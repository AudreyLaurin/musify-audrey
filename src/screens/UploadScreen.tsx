import {useEffect, useState} from "react";
import FileUpload from "../components/FileUpload";
import {SongForm} from "../components/SongForm";
import {SignOutAndLanguageSwitch} from "../components/SignOutAndLanguageSwitch";
import {AudioPlayer} from "../components/AudioPlayer";
import {useAuthenticator} from "@aws-amplify/ui-react";

export const UploadScreen = () => {
    const { user, signOut, authStatus } = useAuthenticator((context) => [context.user, context.signOut, context.authStatus]);

    useEffect(() => {
        document.title = "Musify - Upload";

    }, []);

    return (
        <>
            <SignOutAndLanguageSwitch/>
            <div>Upload Screen</div>
            <FileUpload username={user.username}/>
            <SongForm/>
        </>
    )
}
