import { createContext, useContext, useState, type ReactNode } from "react";

type Mode = "cinematic" | "professional" | null;

const ModeContext = createContext<{
    mode: Mode;
    setMode: (mode: Mode) => void;
}>({
    mode: null,
    setMode: () => {},
});

export const ModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<Mode>(null);

    return (
        <ModeContext.Provider value={{ mode, setMode}}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);