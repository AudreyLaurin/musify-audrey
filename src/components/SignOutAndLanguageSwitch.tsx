import {LanguageSwitch} from "./LanguageSwitch";
import {signOut} from "aws-amplify/auth";

async function handleSignOut() {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const SignOutAndLanguageSwitch = () => {
    return (
        <>
            <LanguageSwitch/>
            <button onClick={() => handleSignOut()}>SIGN OUT</button>
        </>
    )
}
