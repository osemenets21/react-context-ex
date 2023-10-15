import { createContext, useState } from 'react';
type Props = {
    children: JSX.Element,
}
type AppContextType = {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>,
}
export const AppContext = createContext<AppContextType>({} as AppContextType);
export const AppContextProvider = ({ children }: Props) => {
    const [ isDark, setIsDark ]  = useState<boolean>(false);
    return (
        <AppContext.Provider value={{
            isDark,
            setIsDark
        }}>
            {children}
        </AppContext.Provider>
    )
}