import { useState, useEffect, useCallback } from "react";
import { FetchContext } from "./useFetchContext";

export function FetchProvider({ children, url = "https://6ab4b2b624ee9d3caa1ba3fb.mockapi.io/Product" }) {
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [reload, setReload] = useState(0);

	useEffect(() => {
		let isMounted = true;

		const getProduct = async () => {
			setLoading(true);
			setError(null);

			try {
				const res = await fetch(url);

				if (!res.ok) {
					throw new Error("Mahsulotlarni yuklashda xatolik");
				}

				const data = await res.json();

				if (isMounted) {
					setProduct(Array.isArray(data) ? data : (data.products ?? []));
				}
			} catch (err) {
				if (isMounted) {
					setProduct([]);
					setError(err.message || "Noma'lum xatolik");
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		getProduct();

		return () => {
			isMounted = false;
		};
	}, [url, reload]);

	const refetch = useCallback(() => {
		setReload((prev) => prev + 1);
	}, []);

	return (
		<FetchContext.Provider value={{ product, loading, error, refetch }}>
			{children}
		</FetchContext.Provider>
	);
}
