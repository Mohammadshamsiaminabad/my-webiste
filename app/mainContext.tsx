"use client";
// react
import { useContext, createContext, useState, Dispatch, SetStateAction } from "react";

interface mainContextProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

export const mainContext = createContext<mainContextProps | null>(null);
export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState("");
  return (
    <mainContext.Provider value={{ email, setEmail }}>
      {children}
    </mainContext.Provider>
  )

}

export const useMainContext = () => {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("useMainContext must be used inside a MainContextProvider");
  }
  return context;
};