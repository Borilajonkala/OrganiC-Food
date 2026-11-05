
import { useState, useEffect, useCallback } from "react";
import { FetchContext } from "./useFetchContext";

export function FetchProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [farmers, setFarmers] = useState([]);
  const [products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [reload, setReload] = useState(0);

  const getData = useCallback(async () => {
    const urls = [
      "https://6ab4b2b624ee9d3caa1ba3fb.mockapi.io/Product",
      "http://localhost:3001/farmers",
      "http://localhost:3001/products",
      "http://localhost:3001/shopProducts"
    ];

    return await Promise.allSettled(
      urls.map(async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        return await res.json();
      })
    );
  }, []);

  const applyResults = useCallback((results) => {
    const setters = [
      setProduct,
      setFarmers,
      setProducts,
      setShopProducts
    ];

    const names = [
      "product",
      "farmers",
      "products",
      "shopProducts"
    ];

    const failedRequests = {};

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        const data = result.value;

        const finalData = Array.isArray(data)
          ? data
          : data.products ?? [];

        setters[index](finalData);
      } else {
        failedRequests[names[index]] = result.reason.message;
      }
    });

    setErrors(failedRequests);
    setError(failedRequests.product ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    let ignore = false;

    getData().then((results) => {
      if (!ignore) applyResults(results);
    });

    return () => {
      ignore = true;
    };
  }, [getData, applyResults, reload]);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    setErrors({});
    setReload((prev) => prev + 1);
  }, []);

  return (
    <FetchContext.Provider
      value={{
        product,
        farmers,
        products,
        shopProducts,
        loading,
        error,
        errors,
        refetch
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
