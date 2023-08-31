import { EnumLanguage } from "../../common/enums/EnumLanguage";
import React from "react";

export const LanguageContext = React.createContext<{
    selectedLanguage?: EnumLanguage
    setSelectedLanguage?: React.Dispatch<React.SetStateAction<EnumLanguage>>
}>({})

export function LanguageProvider({ children }: { children: JSX.Element }) {
    const [selectedLanguage, setSelectedLanguage] = React.useState<EnumLanguage>(EnumLanguage.ENGLISH)
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    )

}