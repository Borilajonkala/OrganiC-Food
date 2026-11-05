
import { createContext, useContext } from "react";

export const FetchContext = createContext(null);

export const useFetchContext = () => {
  return useContext(FetchContext);
};
