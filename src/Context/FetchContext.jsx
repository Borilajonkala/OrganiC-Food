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

  return (
    <FetchContext.Provider
      value={{
        product,
        farmers,
        products,
        shopProducts,
        loading: false,
        error: null,
        refetch,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
