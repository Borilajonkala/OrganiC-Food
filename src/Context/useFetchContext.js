import { createContext, useContext } from "react";

export const FetchContext = createContext(null);

export function useFetchContext() {
	const ctx = useContext(FetchContext);

	if (!ctx) {
		throw new Error("useFetchContext faqat <FetchProvider> ichida ishlatilishi kerak");
	}

	return ctx;
}
