import { useState, useMemo, useCallback } from "react";
import { FetchContext } from "./useFetchContext";
import db from "../../db.json";

const assetModules = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const assetUrls = Object.entries(assetModules).reduce((acc, [path, url]) => {
  acc[path.split("/").pop()] = url;
  return acc;
}, {});

const resolveImage = (value) => {
  if (!value) return "";
  const fileName = String(value).split(/[\\/]/).pop();
  return assetUrls[fileName] ?? value;
};

const normalizeProduct = (item) => ({
  ...item,
  title: item.title ?? item.name ?? "",
  image: resolveImage(item.img ?? item.image ?? ""),
  price: item.price ?? item.Price ?? 0,
  oldPrice: item.prevPrice ?? item.oldPrice ?? null,
  category: item.type ?? item.category ?? "",
});

const normalizeFarmer = (item) => ({
  ...item,
  name: item.name ?? "",
  job: item.job ?? "",
  image: resolveImage(item.image),
});

export function FetchProvider({ children }) {
  const [data, setData] = useState(db);

<<<<<<< HEAD
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
=======
  const product = useMemo(
    () => (data.product ?? []).map(normalizeProduct),
    [data]
  );
  const farmers = useMemo(
    () => (data.farmers ?? []).map(normalizeFarmer),
    [data]
  );
  const products = data.products ?? [];
  const shopProducts = data.shopProducts ?? [];

  const refetch = useCallback(() => setData({ ...db }), []);
>>>>>>> 0edf308de69059d7e36258a55e243f20593c272c

  return (
    <FetchContext.Provider
      value={{
        product,
        farmers,
        products,
        shopProducts,
<<<<<<< HEAD
        loading,
        error,
        errors,
        refetch
=======
        loading: false,
        error: null,
        refetch,
>>>>>>> 0edf308de69059d7e36258a55e243f20593c272c
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
