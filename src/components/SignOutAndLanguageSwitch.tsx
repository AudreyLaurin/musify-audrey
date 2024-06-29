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
        <div className={"options"}>
            <button onClick={() => handleSignOut()}>SIGN OUT</button>
            <LanguageSwitch/>
        </div>
    )
}
