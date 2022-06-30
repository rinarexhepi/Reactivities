import { createContext, useContext } from "react";
import LibriStore from "./libriStore";
import RevistaStore from "./revistaStore";
import TekstiStore from "./tekstiStore";

interface Store{
    libriStore:LibriStore
    tekstiStore:TekstiStore
    revistaStore:RevistaStore
}

export const store:Store={
    libriStore:new LibriStore(),
    tekstiStore:new TekstiStore(),
    revistaStore:new RevistaStore()
}

export const StoreContext=createContext(store);

export function useStore(){
    return useContext(StoreContext);
}