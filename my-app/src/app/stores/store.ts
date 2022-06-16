import { createContext, useContext } from "react";
import LibriStore from "./libriStore";

interface Store{
    libriStore:LibriStore
}

export const store:Store={
    libriStore:new LibriStore()
}

export const StoreContext=createContext(store);

export function useStore(){
    return useContext(StoreContext);
}