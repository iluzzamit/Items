import { LanguageContext } from "../language-provider/LanguageProvider";
import { EnumLanguage } from "../../common/enums/EnumLanguage";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import axios from "axios";

let key = "083f98b1ea1e49bcbadc13de4616d9a8";
let endpoint = "https://api.cognitive.microsofttranslator.com";
let location = "centralus";


export function TranslateText({ text }: { text: string }) {
    const { selectedLanguage } = React.useContext(LanguageContext);
    const [value, setValue] = React.useState<string>(text);
    const mutation = useMutation({
        mutationKey: ['text'],
        mutationFn: ({ text, selectedLanguage }: { text: string, selectedLanguage: EnumLanguage }) => {
            return axios({
                baseURL: endpoint,
                url: '/translate',
                method: 'post',
                headers: {
                    'Ocp-Apim-Subscription-Key': key,
                    'Ocp-Apim-Subscription-Region': location,
                    'Content-type': 'application/json',
                    'X-ClientTraceId': uuidv4().toString()
                },
                params: { 'api-version': '3.0', 'from': 'en', 'to': selectedLanguage },
                data: [{ text }],
                responseType: 'json'
            }).then(function ({ data }) {
                const { translations } = data[0]
                setValue(translations[0].text);
            })
        },
    });

    React.useEffect(() => {
        if (!selectedLanguage) return;
        if(selectedLanguage === EnumLanguage.ENGLISH) {
            setValue(text);
        } else {
            mutation.mutate({ text, selectedLanguage });
        }
    }, [selectedLanguage])

    return <React.Fragment>{value}</React.Fragment>
}