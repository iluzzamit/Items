import { ThumpsState } from "../../common/types/ThumpsState";
import React from "react";



export const ThumpsContext = React.createContext<
    {
        thumps?: ThumpsState,
        setThumps?: React.Dispatch<React.SetStateAction<ThumpsState>>
    }
>({});

export function ThumpsProvider({ children }: { children: React.ReactElement }) {
    const [thumps, setThumps] = React.useState<ThumpsState>({})
    
    return (
        <ThumpsContext.Provider value={{ thumps, setThumps }}>
            {children}
        </ThumpsContext.Provider>
    );
}