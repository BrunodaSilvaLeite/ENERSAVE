// No seu arquivo context/SolarContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
// Importe a interface do seu arquivo de cálculos

type SolarContextType = {
    resultado: any;
    setCalculationData: (data: any) => void;
};

const SolarContext = createContext<SolarContextType | undefined>(undefined);

export const SolarProvider = ({ children }: { children: ReactNode }) => {
    const [resultado, setResultado] = useState<any | null>(null);

    const setCalculationData = (data: any) => {
        setResultado(data);
    };

    return (
        <SolarContext.Provider value={{ resultado, setCalculationData }}>
            {children}
        </SolarContext.Provider>
    );
};

export const useSolarContext = () => {
    const context = useContext(SolarContext);
    if (!context) {
        throw new Error('useSolarContext must be used within a SolarProvider');
    }
    return context;
};
