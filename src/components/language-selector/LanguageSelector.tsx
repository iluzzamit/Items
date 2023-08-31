import { LanguageContext } from "../language-provider/LanguageProvider";
import { StyledLanguageSelector } from "./LanguageSelector.style";
import { EnumLanguage } from "../../common/enums/EnumLanguage";
import ReactFlagsSelect from "react-flags-select";
import React from "react";


export function LanguageSelector() {
    const { selectedLanguage, setSelectedLanguage } = React.useContext(LanguageContext);

    return (
        <StyledLanguageSelector>
            <ReactFlagsSelect
                className="flag-selector"
                selected={selectedLanguage as any}
                showOptionLabel={false}
                showSelectedLabel={false}
                selectedSize={20}
                onSelect={(code) => setSelectedLanguage?.(code as EnumLanguage)}
                countries={['US', 'ES', 'FR']}
            />
        </StyledLanguageSelector>
    )
}