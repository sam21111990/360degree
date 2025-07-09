import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type of context data
type AppContextType = {
  appName: string;
  setAppName: (name: string) => void;
};

// Create context with default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create provider props
type AppProviderProps = {
  children: ReactNode;
};

// AppProvider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [appName, setAppName] = useState<string>('Viva Host');

  return (
    <AppContext.Provider value={{ appName, setAppName }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
