
import { createContext, useContext } from "react";

export const FetchContext = createContext(null);

export const useFetchContext = () => {
  const context = useContext(FetchContext);

  if (!context) {
    throw new Error("FetchProvider topilmadi!");
  }

  return context;
};
