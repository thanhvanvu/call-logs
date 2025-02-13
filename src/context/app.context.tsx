"use client";
import { createContext, useState, use } from "react";

interface AppContextType {
  callLogs: string;
  setCallLogs: (v: string) => void;
}

// Create a ThemeContext
const AppContext = createContext<AppContextType | null>(null);

interface IAppProvideProps {
  children: React.ReactNode;
}

const AppProvider = (props: IAppProvideProps) => {
  const [callLogs, setCallLogs] = useState<string>("test");

  return (
    <AppContext
      value={{
        callLogs,
        setCallLogs,
      }}
    >
      {props.children}
    </AppContext>
  );
};

// custom hook to call useContext
export const useCurrentApp = () => {
  const currentAppContext = use(AppContext);

  if (!currentAppContext) {
    throw new Error("useCurrentApp has to be used within <AppContext.Provider>");
  }

  return currentAppContext;
};

export default AppProvider;
