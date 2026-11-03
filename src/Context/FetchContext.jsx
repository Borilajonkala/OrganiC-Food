
import { useState, useEffect, useCallback } from "react";
import { FetchContext } from "./useFetchContext";

export function FetchProvider({ children }) {
  const [farmers, setFarmers] = useState([]);
  const [products, setProducts] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [farmersRes, productsRes, shopRes] =
          await Promise.all([
            fetch("http://localhost:3000/farmers"),
            fetch("http://localhost:3000/products"),
            fetch("http://localhost:3000/shopProducts")
          ]);

        const responses = [
          farmersRes,
          productsRes,
          shopRes
        ];

        if (responses.some((res) => !res.ok)) {
          throw new Error("API yuklashda xatolik!");
        }

        const [farmersData, productsData, shopData] =
          await Promise.all(
            responses.map((res) => res.json())
          );

        if (isMounted) {
          setFarmers(farmersData);
          setProducts(productsData);
          setShopProducts(shopData);
        }

      } catch (err) {
        if (isMounted) {
          setError(err.message || "Noma'lum xatolik");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, [reload]);

  const refetch = useCallback(() => {
    setReload((prev) => prev + 1);
  }, []);

  return (
    <FetchContext.Provider
      value={{
        farmers,
        products,
        shopProducts,
        loading,
        error,
        refetch
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
