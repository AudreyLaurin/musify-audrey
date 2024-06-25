import languages from '../data/languages.json';
import React from "react";
import {useTranslation} from "react-i18next";

export const LanguageSwitch = () => {
    const {t, i18n} = useTranslation()

    /*return (
        <div>
            {Object.keys(languages).map((language) => (
                <button type={"submit"} key={language} onClick={() => i18n.changeLanguage(language)}
                        disabled={i18n.resolvedLanguage === language}>{languages[language as keyof typeof languages].nativeName}</button>
            ))}
        </div>
    )*/

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <select
                value={i18n.language}
                onChange={handleChangeLanguage}
            >
                {Object.keys(languages).map((language) => (
                    <option
                        key={language}
                        value={language}
                    >
                        {languages[language as keyof typeof languages].nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
}
